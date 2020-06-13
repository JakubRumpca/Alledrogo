import { Component, OnInit } from '@angular/core';
import { ICars } from '../carInterface';

@Component({
    selector: 'volvo-pages',
    templateUrl: './volvoPages.component.html'
    
})

export class VolvoPages implements OnInit{
        
   
    _descriptionFilter: string 

    get descriptionFilter(): string {
        return this._descriptionFilter;
    }
    set descriptionFilter(values: string) {
        this._descriptionFilter = values
        this.filteredProducts = this.descriptionFilter ? this.performFilter(this.descriptionFilter) : this.cars;
    }
    
    filteredProducts: ICars[];
    cars: ICars[] = [
    {
        picture: "../../../../assets/images/Volvo80.1.png",
        name: "Volvo",
        model: "S80",
        year: "2012",
        price: "52 900",
        description: "VOLVO S80 D4 2.0 163 KM Jasne Skóry Automat Wirtualny Kokpit",
    },
    {
        picture: "../../../../assets/images/VolvoV90.1.jpg",
        name: "Volvo",
        model: "V90",
        year: "2017",
        price: "155 000",
        description: "VOLVO V90 2017 2.0 D4 Radar, Pilot Assist PRYWATNE",
    },
    {
        picture: "../../../../assets/images/VolvoXC.1.png",
        name: "Volvo",
        model: "XC90",
        year: "2018",
        price: "235 000",
        description: "VOLVO XC90 II T6 AWD 320KM 7 Osobowy, FV23%",
    }    
    ]

    constructor() {
        this.filteredProducts = this.cars;
        this.descriptionFilter = ''
    }

    ngOnInit(): void {
        console.log("Method not implemented.");
    }

    performFilter(filterBy: string): ICars[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.cars.filter((car: ICars) =>
            car.description.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
}