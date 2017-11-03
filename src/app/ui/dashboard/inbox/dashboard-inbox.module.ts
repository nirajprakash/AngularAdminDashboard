import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './../../../material.module';
//import {} from 

import { DashboardInboxComponent, DashboardInboxItemComponent} from './index';
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


@NgModule({
    imports: [
        CommonModule,
        MaterialModule, FormsModule,
        FlexLayoutModule
    ],
    declarations: [
        DashboardInboxComponent,
        DashboardInboxItemComponent
    ],
    exports: [
        DashboardInboxComponent,
        DashboardInboxItemComponent
    ]
})
export class DashboardInboxModule { }