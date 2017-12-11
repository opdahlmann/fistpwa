import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent } from '../app/home/home.component';
import {Page1Component} from '../app/page1/page1.component';
import {Page2Component} from '../app/page2/page2.component';

const appRoutes: Routes = [
     
    {
      path: 'home',
      component: HomeComponent
     },
     {
        path: 'page1',
        component: Page1Component
       },
       {
        path: 'page2',
        component: Page2Component
       },
    {
      path: '**', 
      component: HomeComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);