import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePages } from './pages/homePage/homePage';
import { LoginPages } from './pages/loginPage/loginPage';
import { AudiPages } from './pages/cars/Audi/audiPage';
import { BmwPages } from './pages/cars/Bmw/bmwPage';
import { VolvoPages } from './pages/cars/Volvo/volvoPage';
import { HarleyDavidsonPages} from './pages/motorcycle/HarleyDavidson/harleyDavidsonPage';
import { KawasakiPages} from './pages/motorcycle/Kawasaki/kawasakiPage';
import { YamahaPages} from './pages/motorcycle/Yamaha/yamahaPage';
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

const routes: Routes = [  
  {path: '', component: HomePages},
  {path: 'Home', component: HomePages},
  {path: 'Login', component: LoginPages},
  {path: 'Audi', component: AudiPages},
  {path: 'BMW', component: BmwPages},
  {path: 'Volvo', component: VolvoPages},
  {path: 'HarleyDavidson', component: HarleyDavidsonPages},
  {path: 'Kawasaki', component: KawasakiPages},
  {path: 'Yamaha', component: YamahaPages},
  {path: 'S80', component: S80Pages},
  {path: 'XC90', component: XC90Pages},
  {path: 'V90', component: V90Pages},
  {path: 'seria3', component: BMW3Pages},
  {path: 'seria5', component: BMW5Pages},
  {path: 'X6', component: BMWX6Pages},
  {path: 'A4', component: A4Pages},
  {path: 'A6', component: A6Pages},
  {path: 'Q7', component: Q7Pages},
  {path: 'Ninja', component: NinjaPages}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
