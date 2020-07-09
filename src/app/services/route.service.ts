import { Injectable } from '@angular/core';
import { Route } from '../objects/Route';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor() { }

  getAllRoutes(): Observable<Route[]> {
    let routes: Route[] = [
      {value: 'route-1', displayValue: 'Route 1'},
      {value: 'route-2', displayValue: 'Route 2'},
      {value: 'route-3', displayValue: 'Route 3'}
    ];

    return of(routes);
  }
}
