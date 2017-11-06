import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './../../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AgmCoreModule } from '@agm/core';

import { MapLocationComponent} from './index';
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
    redirectTo: 'location',
    pathMatch: 'full',
  },
  {
    path: 'location',
    component: MapLocationComponent
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
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyDMKo7hudlvGD09F1FzS1YddtsRV3yo1S0"
    }),
    routes
  ],
  declarations: [
   MapLocationComponent
  ],
  exports: [
    MapLocationComponent
  ]
})
export class MapModule { }