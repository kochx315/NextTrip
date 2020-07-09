import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchRouteComponent } from './research-route.component';
import { RouteService } from '../services/route.service';
import { Route } from '../objects/Route';
import { of } from 'rxjs';

describe('ResearchRouteComponent', () => {
  let component: ResearchRouteComponent;
  let fixture: ComponentFixture<ResearchRouteComponent>;
  let service: RouteService;

  let mockRoutes: Route[] = [
    {value: 'route-1', displayValue: 'Route 1'},
    {value: 'route-2', displayValue: 'Route 2'},
    {value: 'route-3', displayValue: 'Route 3'}
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearchRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchRouteComponent);
    component = fixture.componentInstance;
    service = TestBed.get(RouteService);
    fixture.detectChanges();
  });

  afterEach(() => {
    service = null;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call RouteService.getAllRoutes()', () => {
    let spy = spyOn(service, 'getAllRoutes').and.returnValue(of(mockRoutes));
    component.ngOnInit();

    expect(spy).toHaveBeenCalledTimes(1);
    expect(component.routes.length).toEqual(3);
  });
});
