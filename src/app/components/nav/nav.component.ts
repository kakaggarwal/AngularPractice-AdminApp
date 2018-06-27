import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: 'nav.component.html',
  styles: []
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.selectedRoute = "/";
  }

  selectedRoute: string;

  onRouteSelect(route: string): void {
    this.selectedRoute = route;
  }
}
