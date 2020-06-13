import { Component } from '@angular/core';

@Component({
    selector: 'bmw3-pages',
    templateUrl: './3.component.html'
    
})

export class BMW3Pages {

    car = {
        name: "BMW",
        model: "Model: seria 3",
        year: "Year: 2015",
        price: "Price: 55 000",
        engine: "Engine: 2.0D 184HP",
        tel: "Tel: 660 660 660"
    } 
}