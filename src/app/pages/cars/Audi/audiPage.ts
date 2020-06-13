import { Component } from '@angular/core';
import { ICars } from '../carInterface';

@Component({
    selector: 'audi-pages',
    templateUrl: './audiPages.component.html'
    
})

export class AudiPages {
  
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
        picture: "../../../../assets/images/A4.1.jpg",
        name: "Audi",
        model: "A4",
        year: "2010",
        price: "44 000",
        description: "AUDI A4 B8 2.0 TDI CR *PARKTRONIC *NAVI PL *LED",
    },
    {
        picture: "../../../../assets/images/A6.1.jpg",
        name: "Audi",
        model: "A6",
        year: "2015",
        price: "99 000",
        description: "AUDI A6 C7 QUATTRO 4X4 3.0TDI AUTOMAT 245KM",
    },
    {
        picture: "../../../../assets/images/AudiQ7.1.jpg",
        name: "Audi",
        model: "Q7",
        year: "2016",
        price: "180 000",
        description: "AUDI Q7 3.0 TDI quattro 272 KM SLine",
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
