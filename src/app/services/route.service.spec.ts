import { TestBed, async } from '@angular/core/testing';
import { RouteService } from './route.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Route } from '../objects/Route';
import { of } from 'rxjs';

describe('RouteService', () => {
  let service: RouteService;
  let httpClient: HttpClient;

  let mockRoutes: Route[] = [
    {Description: 'METRO Blue Line', ProviderID: '8', Route: '901'},
    {Description: 'METRO Green Line', ProviderID: '8', Route: '902'},
    {Description: 'METRO Red Line', ProviderID: '9', Route: '903'}
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteService);
    httpClient = TestBed.get(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getAllRoutes', () => {
    it('should return an observable of 3 routes', () => {
      let spy = spyOn(httpClient, 'get').and.returnValue(of(mockRoutes));
      
      service.getAllRoutes().subscribe(allRoutes => {
        expect(allRoutes.length).toEqual(3);
      });

      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});
