import { Component, OnInit } from '@angular/core';
import { Route } from '../objects/Route';
import { Direction } from '../objects/Direction';
import { Stop } from '../objects/Stop';
import { RouteService } from '../services/route.service';

@Component({
  selector: 'app-research-route',
  templateUrl: './research-route.component.html',
  styleUrls: ['./research-route.component.css']
})
export class ResearchRouteComponent implements OnInit {
  routes: Route[] = [];
  directions: Direction[] = [];
  stops: Stop[] = [];

  selectedRoute: string;
  selectedDirection: string;
  selectedStop: string;

  showDirections: boolean = false;
  showStops: boolean = false;

  constructor(private routeService: RouteService) { }

  ngOnInit(): void {
    this.routeService.getAllRoutes().subscribe(allRoutes => {
      this.routes = allRoutes;
    });
  }

  routeSelected(event): void {
    this.showDirections = true;
    this.showStops = false;

    this.selectedRoute = event.value;
    this.selectedDirection = undefined;
    this.selectedStop = undefined;

    this.routeService.getDirections(this.selectedRoute).subscribe(directions => {
      this.directions = directions;
    });
  }

  directionSelected(event): void {
    this.showStops = true;

    this.selectedDirection = event.value;
    this.selectedStop = undefined;

      this.routeService.getStops(this.selectedRoute, this.selectedDirection).subscribe(stops => {
        this.stops = stops;
      });
  }
}
