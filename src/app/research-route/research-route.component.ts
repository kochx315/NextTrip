import { Component, OnInit } from '@angular/core';
import { Route } from '../objects/Route';

@Component({
  selector: 'app-research-route',
  templateUrl: './research-route.component.html',
  styleUrls: ['./research-route.component.css']
})
export class ResearchRouteComponent implements OnInit {
  routes: Route[] = [
    {value: 'route-1', displayValue: 'Route 1'},
    {value: 'route-2', displayValue: 'Route 2'},
    {value: 'route-3', displayValue: 'Route 3'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
