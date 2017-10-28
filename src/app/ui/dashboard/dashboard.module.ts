import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//import {} from 

import { DashboardHomeComponent } from './index';
//import {ContainerSimpleComponent } from './../../containers'


//import {ContainerModule } from './../../containers/container.module'

// import {SharedModule} from '../../shared'

// const routes: ModuleWithProviders = RouterModule.forChild([
//   {
//     path: '',
//     component: CartComponent
//   },
//   {
//     path: 'item',
//     component: CartItemComponent
//   }
// ]);

export const routes: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: DashboardHomeComponent
  }
  // {
  //   path: '',
  //   redirectTo: 'login',
  //   pathMatch: 'full',    
  // },
  // {
  //     path: '',
  //     component: ContainerSimpleComponent,
  //     data: {
  //       title: 'Home'
  //     },
  //     children: [
  //       {
  //         path: 'login',
  //         component: PageLoginComponent
  //       },
  //     ]
  //   }
]);


@NgModule({
  imports: [
    CommonModule,
    routes
  ],
  declarations: [
    DashboardHomeComponent
  ],
  exports: [
    DashboardHomeComponent
  ]
})
export class DashboardModule { }