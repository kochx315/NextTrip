import { Component, OnInit } from '@angular/core';
import { Route } from '../objects/Route';
import { Direction } from '../objects/Direction';
import { RouteService } from '../services/route.service';

@Component({
  selector: 'app-research-route',
  templateUrl: './research-route.component.html',
  styleUrls: ['./research-route.component.css']
})
export class ResearchRouteComponent implements OnInit {
  routes: Route[] = [];
  directions: Direction[] = [];

  constructor(private routeService: RouteService) { }

  ngOnInit(): void {
    this.routeService.getAllRoutes().subscribe(allRoutes => {
      this.routes = allRoutes;
    });
  }

  routeSelected(event): void {
    this.routeService.getDirections(event.value).subscribe(directions => {
      this.directions = directions;
    });
  }

  directionSelected(event): void {
      
    }
}
