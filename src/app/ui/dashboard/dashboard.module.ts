import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './../../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

//import {} from 
import { DashboardInboxModule} from './inbox/dashboard-inbox.module';
import { WidgetModule} from './widget';

import { DashboardAnalysisComponent} from './analysis';

import { DashboardHomeComponent, 
  DashboardInboxComponent, 
  DashboardWidgetComponent} from './index';
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
    path: 'analysis',
    component: DashboardAnalysisComponent
  },
  {
    path: 'home',
    component: DashboardHomeComponent
  },
  {
    path: 'inbox',
    component: DashboardInboxComponent
  },
  {
    path: 'widget',
    component: DashboardWidgetComponent
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
    DashboardInboxModule,
    WidgetModule,
    routes
  ],
  declarations: [
    DashboardHomeComponent,
    DashboardAnalysisComponent,
  ],
  exports: [
    DashboardHomeComponent
  ]
})
export class DashboardModule { }