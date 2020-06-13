import { Component } from '@angular/core';

@Component({
    selector: 'bmw5-pages',
    templateUrl: './5.component.html'
    
})

export class BMW5Pages {

    car = {
        name: "BMW",
        model: "Model: seria 5",
        year: "Year: 2008",
        price: "Price: 24 000",
        engine: "Engine: 3.0B 284HP",
        tel: "Tel: 660 660 660"
    } 
}