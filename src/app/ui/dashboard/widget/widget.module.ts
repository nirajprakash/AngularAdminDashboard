import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './../../../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

//import {} from 
import { WidgetWeatherChipComponent,
    WidgetWeatherComponent,
     DashboardWidgetComponent} from './index';



@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
  ],
  declarations: [
    WidgetWeatherChipComponent,
    WidgetWeatherComponent,
    DashboardWidgetComponent
  ],
  exports: [
    DashboardWidgetComponent
  ]
})
export class WidgetModule { }