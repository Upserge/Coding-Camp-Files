import { Routes } from '@angular/router';
import {Home} from './home/home';
import {Child} from './child/child';


export const routes: Routes = [

 { path: '', redirectTo: 'home', pathMatch: 'full' },

 { path: 'home', component: Home },

 {path: '', redirectTo: 'child', pathMatch: 'full'},

 {path: 'child', component: Child },

];
