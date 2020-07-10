import { TestBed, async } from '@angular/core/testing';
import { RouteService } from './route.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Route } from '../objects/Route';
import { of } from 'rxjs';
import { Direction } from '../objects/Direction';
import { Stop } from '../objects/Stop';

describe('RouteService', () => {
  let service: RouteService;
  let httpClient: HttpClient;

  let mockRoutes: Route[] = [
    {Description: 'METRO Blue Line', ProviderID: '8', Route: '901'},
    {Description: 'METRO Green Line', ProviderID: '8', Route: '902'},
    {Description: 'METRO Red Line', ProviderID: '9', Route: '903'}
  ];

  let mockDirections: Direction[] = [
    {Text: 'NORTHBOUND', Value: '4'},
    {Text: 'SOUTHBOUND', Value: '1'}
  ];

  let mockStops: Stop[] = [
    {'Text':'Mall of America Transit Station','Value':'MAAM'},
    {'Text':'Portland Ave and 77th St','Value':'77PO'},
    {'Text':'Portland Ave and 66th St','Value':'66PO'},
    {'Text':'Chicago Ave and 56th St','Value':'56CH'},
    {'Text':'Chicago Ave and 46th St','Value':'46CH'},
    {'Text':'Chicago Ave and 38th St','Value':'38CH'},
    {'Text':'Chicago Lake Transit Center','Value':'CHLA'},
    {'Text':'Chicago Ave and 8th St ','Value':'8SCH'},
    {'Text':'7th St & Nicollet Station','Value':'7SNI'},
    {'Text':'7th St  and Olson Memorial Hwy','Value':'7SOL'},
    {'Text':'Emerson Ave  and W Broadway Ave','Value':'EMBD'},
    {'Text':'26th Ave and Penn Ave','Value':'26PN'},
    {'Text':'33rd Ave  and Fremont Ave ','Value':'33FM'},
    {'Text':'44th Ave  and Fremont Ave ','Value':'44FM'},
    {'Text':'Osseo Rd and 47th Ave ','Value':'47OS'},
    {'Text':'Brooklyn Center Transit Center','Value':'BCTC'}
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

    it('should call http GET with the correct url', () => {
      let spy = spyOn(httpClient, 'get').and.returnValue(of(mockRoutes));
      service.getAllRoutes();

      expect(spy).toHaveBeenCalledWith('https://svc.metrotransit.org/NexTrip/Routes?format=json');
    });
  });

  describe('getDirections', () => {
    it('should return an observable of 2 directions', () => {
      let route = '1';
      let spy = spyOn(httpClient, 'get').and.returnValue(of(mockDirections));
      
      service.getDirections(route).subscribe(directions => {
        expect(directions.length).toEqual(2);
      });

      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should call http GET with the correct url', () => {
      let route = '1';
      let spy = spyOn(httpClient, 'get').and.returnValue(of(mockDirections));
      service.getDirections(route);

      expect(spy).toHaveBeenCalledWith('https://svc.metrotransit.org/NexTrip/Directions/' + route + '?format=json');
    });
  });

  describe('getStops', () => {
    it('should return an observable of 16 stops', () => {
      let route = '1';
      let direction = '2';
      let spy = spyOn(httpClient, 'get').and.returnValue(of(mockStops));
      
      service.getStops(route, direction).subscribe(directions => {
        expect(directions.length).toEqual(16);
      });

      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should call http GET with the correct url', () => {
      let route = '1';
      let direction = '2';
      let spy = spyOn(httpClient, 'get').and.returnValue(of(mockStops));
      service.getStops(route, direction);

      expect(spy).toHaveBeenCalledWith('https://svc.metrotransit.org/NexTrip/Stops/' + route + '/' + direction + '?format=json');
    });
  });
});
