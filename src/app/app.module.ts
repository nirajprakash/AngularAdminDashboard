import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';
//import {ContainerModule} from './containers/container.module';


// Import components
import {
  ContainerFullComponent,
  ContainerSimpleComponent
} from './containers';
// const containers = [ContainerSimpleComponent,
// ContainerFullComponent];

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: '',
    component: ContainerFullComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './ui/dashboard/dashboard.module#DashboardModule'
      }
    ]
  },
  {
    path: 'page',
    component: ContainerSimpleComponent,
    data: {
      title: 'Pages'
    },
    children: [
      {
        path: '',
        loadChildren: './ui/pages/page.module#PageModule'
      }
    ]
  }
  // ,
  // { path: 'product-card', loadChildren: './ui/product-card/product-card.module#ProductCardModule' },
  // { path: 'product-view', loadChildren: './ui/product-view/product-view.module#ProductViewModule' },
  // { path: 'cart', loadChildren: './ui/cart/cart.module#CartModule' },
  // { path: 'filter', loadChildren: './ui/filter/filter.module#FilterModule' },
  // { path: 'profile', loadChildren: './ui/profile/profile.module#ProfileModule' },
  // { path: 'auth', loadChildren: './ui/authentication/authentication.module#AuthenticationModule' }
  //{ path: 'sample', loadChildren: ()=> SampleModule }
];
const rootRouting: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: false, enableTracing: true });

@NgModule({
  declarations: [
    AppComponent,
    ContainerFullComponent,
    ContainerSimpleComponent
    //...containers
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FlexLayoutModule,
    rootRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
