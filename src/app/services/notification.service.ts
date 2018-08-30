import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  notifications = [];

  add(notification: string, type: string) {
    this.notifications.push({ notification, type });
  }

  clear() {
    this.notifications = [];
  }

}
