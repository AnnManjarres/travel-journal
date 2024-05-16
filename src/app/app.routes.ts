import { Routes } from '@angular/router';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { LoginComponent } from './views/login/login.component';
import { HomePageComponent } from './views/home-page/home-page.component';

export const routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'home', component: HomePageComponent},
    {path: 'login', component: LoginComponent},

];
