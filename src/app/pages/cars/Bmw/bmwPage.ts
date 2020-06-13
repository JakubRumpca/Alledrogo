import { Component } from '@angular/core';
import { ICars } from '../carInterface';


@Component({
    selector: 'bmw-pages',
    templateUrl: './bmwPages.component.html'
    
})

export class BmwPages {
           
   
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
        picture: "../../../../assets/images/BMW5.1.png",
        name: "BMW",
        model: "seria5",
        year: "2008",
        price: "24 000",
        description: "BMW seria5 E60 3.0 benzyna 2008 r",
  },
    {
        picture: "../../../../assets/images/BMW3.1.jpg",
        name: "BMW",
        model: "seria3",
        year: "2015",
        price: "55 000",
        description: "BMW 320d 184KM Sedan Skóra Duża Navi Nowy Rozrząd",
 },
    {
        picture: "../../../../assets/images/BMWX6.1.jpg",
        name: "BMW",
        model: "X6",
        year: "2012",
        price: "80 000",
        description: "BMW X6 X-DRIVE 4,0 LAMPY FULL LED 306km",
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