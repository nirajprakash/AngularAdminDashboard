import { Component } from '@angular/core';
import {messages} from './data';
@Component({
  selector: 'dashboard-inbox',
  templateUrl: './dashboard-inbox.component.html',
  styleUrls: ['./dashboard-inbox.component.scss']
})
export class DashboardInboxComponent {

  _vmMailStatusList = ["read", "unread"];
  _vmMailStatusSelected: string;

  _vmMailList = [
    {
      subject:"wq",
      mailerName:"niraj",
      message:"dndj njd jnndjnjdn jdnjdjwdjnjdw  jdnj",
      time: "12/3232",
      attachments:["ewew","ewew"]
    },
    {
      subject:"wq2",
      mailerName:"1niraj",
      message:"dndj njd jnndjnjdn jdnjdjwdjnjdw  jdnj",
      time: "12/3232",
      attachments:["ewew","ewew"]
    }
  ];
  _vmMessages = messages;
 
 }