import { Component, ViewChild } from '@angular/core';

import { MdcTemporaryDrawerComponent } from '@angular-mdc/web';
@Component({
  selector: 'app-dashboard',
  templateUrl: './container-full.component.html',
  styleUrls:['./container-full.component.scss']
})
export class ContainerFullComponent { 
  isFixed: boolean = true;
  @ViewChild('drawer') drawer: MdcTemporaryDrawerComponent;

  toggleDrawer() {
    this.drawer.open();
  }
}