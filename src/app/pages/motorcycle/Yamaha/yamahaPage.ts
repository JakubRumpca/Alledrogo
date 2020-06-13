import { Component } from '@angular/core';
import { IMotors } from '../motorcycleInterface';


@Component({
    selector: 'yamaha-pages',
    templateUrl: './yamahaPages.component.html'
    
})

export class YamahaPages {

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
        picture: "../../../../assets/images/yamaha1.png",
        name: "Yamaha",
        model: "DRAG STAR",
        year: "2002",
        price: "14 200",
        description: "Yamaha XVS 650 Drag Star Classic",
    },
    {
        picture: "../../../../assets/images/yama1.jpg",
        name: "Yamaha",
        model: "MT-09",
        year: "2017",
        price: "27 500",
        description: "JAK NOWY !! Yamaha MT-09 RN43 QS 115KM FLUO NIGHT",
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