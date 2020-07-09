import { TestBed } from '@angular/core/testing';
import { RouteService } from './route.service';

describe('RouteServiceService', () => {
  let service: RouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getAllRoutes', () => {
    it('should return an observable of 3 routes', () => {
      service.getAllRoutes().subscribe(allRoutes => {
        expect(allRoutes.length).toEqual(3);
      });
    });
  });
});
