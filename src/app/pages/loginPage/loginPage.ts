import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';



@Component({
    selector: 'login-pages',
    templateUrl: './loginPages.component.html'
    
})

export class LoginPages {

    app = new AppComponent();

    SingIn(){
        console.log("NIE NO KILKA NIEDOCIĄGNIEĆ JEST ;/ ..")
    }

}