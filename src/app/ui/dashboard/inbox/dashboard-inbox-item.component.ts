import { Component, HostBinding, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dashboard-inbox-item',
  templateUrl: './dashboard-inbox-item.component.html',
  styleUrls: ['./dashboard-inbox-item.component.scss']
})
export class DashboardInboxItemComponent {

  @HostBinding('class.message-opened')
  @Input() opened = false;

  @Input() avatar = '';
  @Input() from = '';
  @Input() subject = '';
  @Input() body = '';
  @Input() recieved = new Date();

  @Output() removed = new EventEmitter<void>();
  @Output() reply = new EventEmitter<{ to: string, subject: string }>();

  onOpenToggle(): void {
    console.log("toggle: "+ this.opened);
    this.opened = !this.opened;
  }

  onReply(): void {
    this.reply.emit({
      to: this.from,
      subject: `RE: ${this.subject}`
    });
  }

}