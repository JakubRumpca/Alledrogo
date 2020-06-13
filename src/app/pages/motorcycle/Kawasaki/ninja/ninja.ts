import { Component } from '@angular/core';

@Component({
    selector: 'ninja-pages',
    templateUrl: './ninja.component.html'
    
})

export class NinjaPages {

    car = {
        name: "Kawasaki",
        model: "Model: Ninja",
        year: "Year: 2012",
        price: "Price: 23 000",
        engine: "Engine: 1.0 200HP",
        tel: "Tel: 660 660 660"
    } 
}