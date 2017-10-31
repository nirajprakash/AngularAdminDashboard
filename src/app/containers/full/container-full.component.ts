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
        name: "Home",
        icon: "home",
        color: "mdc-color-text--purple"
      }, {
        name: "Charts",
        icon: "insert_charts",
        color: "mdc-color-text--brown",

      }, {
        name: "Tables",
        icon: "list",
        color: "mdc-color-text--green",
      }, {
        name: "Forms",
        icon: "mode_edit",
        color: "mdc-color-text--indigo",
      }, {
        name: "Widgets",
        icon: "widgets",
        color: "mdc-color-text--blue-grey-700",
      }

    ],
    iot: [
      {
        name: "Real-time",
        icon: "update",
        color: "mdc-color-text--grey-900"
      }, {
        name: "Track",
        icon: "track_changes",
        color: "mdc-color-text--grey-900",

      }
    ],
    map: [
      {
        name: "Location",
        icon: "location_on",
        color: "mdc-color-text--grey-900"
      }, {
        name: "Route Track",
        icon: "navigation",
        color: "mdc-color-text--grey-900",

      }
    ],
    pages: [
      {
        name: "login",
        icon: "update",
        color: "mdc-color-text--grey-900"
      }, {
        name: "sign-up",
        icon: "track_changes",
        color: "mdc-color-text--grey-900",

      }, {
        name: "time-line",
        icon: "timeline",
        color: "mdc-color-text--grey-900",

      }
    ],
    
  };


  toggleDrawer() {
    this.drawer.open();
  }
}