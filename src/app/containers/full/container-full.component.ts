import { Component, ViewChild } from '@angular/core';

import { MdcTemporaryDrawerComponent } from '@angular-mdc/web';
@Component({
  selector: 'app-dashboard',
  templateUrl: './container-full.component.html',
  styleUrls: ['./container-full.component.scss']
})
export class ContainerFullComponent {

  isFixed: boolean = true;

  @ViewChild('drawer') drawer: MdcTemporaryDrawerComponent;

  _vmNavItems: any = {
    dashboard: [
      {
        name: "home",
        icon: "home",
        color: "mdc-color-text--purple"
      }, {
        name: "charts",
        icon: "insert_charts",
        color: "mdc-color-text--brown",

      }, {
        name: "tables",
        icon: "list",
        color: "mdc-color-text--green",
      }, {
        name: "forms",
        icon: "mode_edit",
        color: "mdc-color-text--indigo",
      }, {
        name: "widgets",
        icon: "widgets",
        color: "mdc-color-text--blue-grey-700",
      }

    ]};


  toggleDrawer() {
      this.drawer.open();
    }
  }