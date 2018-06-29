import { Component, OnInit } from '@angular/core';

import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: 'notification.component.html',
  styles: []
})
export class NotificationComponent implements OnInit {

  // public here because this is service is to be used in html template for displaying messages.
  constructor(public notificationService: NotificationService) { }

  ngOnInit() {
  }

}
