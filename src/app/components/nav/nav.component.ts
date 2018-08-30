import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: 'nav.component.html',
  styles: []
})
export class NavComponent implements OnInit {
  selectedRoute: string;

  constructor() { }

  ngOnInit() {
    this.selectedRoute = '/';
  }

  onRouteSelect(route: string): void {
    this.selectedRoute = route;
  }
}
