import { Component } from '@angular/core';

@Component({
  selector: 'dashboard-inbox-item',
  templateUrl: './dashboard-inbox-item.component.html',
  styleUrls: ['./dashboard-inbox-item.component.scss']
})
export class DashboardInboxItemComponent {

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
}