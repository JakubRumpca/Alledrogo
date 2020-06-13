import { Component } from '@angular/core';
import { IMotors } from '../motorcycleInterface';


@Component({
    selector: 'kawasaki-pages',
    templateUrl: './kawasakiPages.component.html'
    
})

export class KawasakiPages {

    _descriptionFilter: string 

    get descriptionFilter(): string {
        return this._descriptionFilter;
    }
    set descriptionFilter(values: string) {
        this._descriptionFilter = values
        this.filteredProducts = this.descriptionFilter ? this.performFilter(this.descriptionFilter) : this.motors;
    }
    
    filteredProducts: IMotors[];
    motors: IMotors[] = [
    {
        picture: "../../../../assets/images/ninja1.1.jpg",
        name: "Kawasaki",
        model: "Ninja",
        year: "2012",
        price: "23 000",
        description: "KAWASAKI MOTORCYCLES Ninja ZX-10R (ZXT00S)",
    },
    {
        picture: "../../../../assets/images/kawavulcan1.png",
        name: "Kawasaki",
        model: "Vulcan",
        year: "2013",
        price: "28 700",
        description: "Kawasaki Vulcan VN 1700 2013r",
    }
    ]

    constructor() {
        this.filteredProducts = this.motors;
        this.descriptionFilter = ''
    }

    ngOnInit(): void {
        console.log("Method not implemented.");
    }

    performFilter(filterBy: string): IMotors[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.motors.filter((motor: IMotors) =>
            motor.description.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
}