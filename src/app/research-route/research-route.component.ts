import { Component, OnInit } from '@angular/core';
import { Route } from '../objects/Route';
import { RouteService } from '../services/route.service';

@Component({
  selector: 'app-research-route',
  templateUrl: './research-route.component.html',
  styleUrls: ['./research-route.component.css']
})
export class ResearchRouteComponent implements OnInit {
  routes: Route[] = [];

  constructor(private routeService: RouteService) { }

  ngOnInit(): void {
    this.routeService.getAllRoutes().subscribe(allRoutes => {
      this.routes = allRoutes;
    });
  }

}
