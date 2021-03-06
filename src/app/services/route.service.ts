import { Injectable } from '@angular/core';
import { Route } from '../objects/Route';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Direction } from '../objects/Direction';
import { Stop } from '../objects/Stop';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private http: HttpClient) { }

  getAllRoutes(): Observable<Route[]> {
    return this.http.get<Route[]>('https://svc.metrotransit.org/NexTrip/Routes?format=json');
  }

  getDirections(route: string): Observable<Direction[]> {
    return this.http.get<Direction[]>('https://svc.metrotransit.org/NexTrip/Directions/' + route + '?format=json');
  }

  getStops(route: string, direction: string): Observable<Stop[]> {
    return this.http.get<Stop[]>('https://svc.metrotransit.org/NexTrip/Stops/' + route + '/' + direction + '?format=json');
  }
}
