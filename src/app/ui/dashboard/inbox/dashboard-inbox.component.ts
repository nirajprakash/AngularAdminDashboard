import { Component } from '@angular/core';

@Component({
  selector: 'dashboard-inbox',
  templateUrl: './dashboard-inbox.component.html',
  styleUrls: ['./dashboard-inbox.component.scss']
})
export class DashboardInboxComponent {

  _vmMailStatusList = ["read", "unread"];
  _vmMailStatusSelected: string;
 }