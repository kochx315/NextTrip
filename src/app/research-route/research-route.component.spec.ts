import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchRouteComponent } from './research-route.component';
import { RouteService } from '../services/route.service';
import { Route } from '../objects/Route';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { Direction } from '../objects/Direction';

describe('ResearchRouteComponent', () => {
  let component: ResearchRouteComponent;
  let fixture: ComponentFixture<ResearchRouteComponent>;
  let service: RouteService;

  let mockRoutes: Route[] = [
    {Description: 'METRO Blue Line', ProviderID: '8', Route: '901'},
    {Description: 'METRO Green Line', ProviderID: '8', Route: '902'},
    {Description: 'METRO Red Line', ProviderID: '9', Route: '903'}
  ];

  let mockDirections: Direction[] = [
    {Text: 'NORTHBOUND', Value: '4'},
    {Text: 'SOUTHBOUND', Value: '1'}
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearchRouteComponent ],
      imports: [HttpClientModule]
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

  describe('routeSelected', () => {
    it('should call RouteService.getDirections()', () => {
      let spy = spyOn(service, 'getDirections').and.returnValue(of(mockDirections));
      component.routeSelected({value: '901'});

      expect(spy).toHaveBeenCalledWith('901');
    });

    it('should set directions', () =>{
      let spy = spyOn(service, 'getDirections').and.returnValue(of(mockDirections));
      component.routeSelected({value: '901'});

      expect(component.directions.length).toEqual(2);
      expect(component.directions[0].Text).toEqual(mockDirections[0].Text);
      expect(component.directions[0].Value).toEqual(mockDirections[0].Value);
      expect(component.directions[1].Text).toEqual(mockDirections[1].Text);
      expect(component.directions[1].Value).toEqual(mockDirections[1].Value);
    });
  });
});
