import { Injectable } from '@angular/core';
import { Route } from '../objects/Route';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private http: HttpClient) { }

  getAllRoutes(): Observable<Route[]> {
    return this.http.get<Route[]>('https://svc.metrotransit.org/NexTrip/Routes?format=json');
  }
}
