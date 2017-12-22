import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {MomentModule} from 'angular2-moment';

import { MaterialModule } from './../../../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

//import {} from 
import { WidgetWeatherChipComponent,
    WidgetWeatherComponent,
     DashboardWidgetComponent,
    WidgetAlarmComponent} from './index';



@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    MomentModule
  ],
  declarations: [
    WidgetWeatherChipComponent,
    WidgetWeatherComponent,
    DashboardWidgetComponent,
    WidgetAlarmComponent
  ],
  exports: [
    DashboardWidgetComponent
  ]
})
export class WidgetModule { }