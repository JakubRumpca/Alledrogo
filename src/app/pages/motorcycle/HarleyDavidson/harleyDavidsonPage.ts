import { Component } from '@angular/core';
import { IMotors } from '../motorcycleInterface';

@Component({
    selector: 'harleyDavidson-pages',
    templateUrl: './harleyDavidsonPages.component.html'
    
})

export class HarleyDavidsonPages {
       
   
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
        picture: "../../../../assets/images/harley1.jpg",
        name: "Harley Davidson",
        model: "SPORTSTER",
        year: "2004",
        price: "42 900",
        description: "Harley-Davidson Sportster",
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