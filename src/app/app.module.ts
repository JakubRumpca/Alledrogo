import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePages } from './pages/homePage/homePage';
import { LoginPages } from './pages/loginPage/loginPage';
import { AudiPages } from './pages/cars/Audi/audiPage';
import { BmwPages } from './pages/cars/Bmw/bmwPage';
import { VolvoPages } from './pages/cars/Volvo/volvoPage';
import { HarleyDavidsonPages } from './pages/motorcycle/HarleyDavidson/harleyDavidsonPage';
import { KawasakiPages } from './pages/motorcycle/Kawasaki/kawasakiPage';
import { YamahaPages } from './pages/motorcycle/Yamaha/yamahaPage';
import { S80Pages } from './pages/cars/Volvo/s80/s80';
import { XC90Pages } from './pages/cars/Volvo/xc90/xc90';
import { V90Pages } from './pages/cars/Volvo/v90/v90';
import { BMW3Pages } from './pages/cars/Bmw/3/3';
import { BMW5Pages } from './pages/cars/Bmw/5/5';
import { BMWX6Pages } from './pages/cars/Bmw/x6/x6';
import { A4Pages } from './pages/cars/Audi/A4/A4';
import { A6Pages } from './pages/cars/Audi/A6/A6';
import { Q7Pages } from './pages/cars/Audi/Q7/Q7';
import { NinjaPages } from './pages/motorcycle/Kawasaki/ninja/ninja';

@NgModule({
  declarations: [
    AppComponent,
    HomePages,
    LoginPages,
    AudiPages,
    BmwPages,
    VolvoPages,
    HarleyDavidsonPages,
    KawasakiPages,
    YamahaPages,
    S80Pages,
    XC90Pages,
    V90Pages,
    BMW3Pages,
    BMW5Pages,
    BMWX6Pages,
    A4Pages,
    A6Pages,
    Q7Pages,
    NinjaPages
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
