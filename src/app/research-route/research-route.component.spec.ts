import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchRouteComponent } from './research-route.component';
import { RouteService } from '../services/route.service';
import { Route } from '../objects/Route';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { Direction } from '../objects/Direction';
import { Stop } from '../objects/Stop';

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
    it('should set showDirections to true', () => {
      let spy = spyOn(service, 'getDirections').and.returnValue(of(mockDirections));
      component.routeSelected({value: '901'});

      expect(component.showDirections).toBeTrue();
    });

    it('should set showStops to false', () => {
      let spy = spyOn(service, 'getDirections').and.returnValue(of(mockDirections));
      component.routeSelected({value: '901'});

      expect(component.showStops).toBeFalse();
    });

    it('should call RouteService.getDirections()', () => {
      let spy = spyOn(service, 'getDirections').and.returnValue(of(mockDirections));
      component.routeSelected({value: '901'});

      expect(spy).toHaveBeenCalledWith('901');
    });

    it('should set selectedRoute', () => {
      let spy = spyOn(service, 'getDirections').and.returnValue(of(mockDirections));
      component.routeSelected({value: '901'});

      expect(component.selectedRoute).toEqual('901');
    });

    it('should set selectedDirection and selectedRoute to undefined', () => {
      let spy = spyOn(service, 'getDirections').and.returnValue(of(mockDirections));
      component.routeSelected({value: '901'});

      expect(component.selectedDirection).toBeUndefined();
      expect(component.selectedStop).toBeUndefined();
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

  describe('directionSelected', () => {
    it('should set showStops to true', () => {
      component.selectedRoute = '901';
      let spy = spyOn(service, 'getStops').and.returnValue(of(mockStops));
      component.directionSelected({value: '4'});

      expect(component.showStops).toBeTrue();
    });

    it('should call RouteService.getStops()', () => {
      component.selectedRoute = '901';
      let spy = spyOn(service, 'getStops').and.returnValue(of(mockStops));
      component.directionSelected({value: '4'});

      expect(spy).toHaveBeenCalledWith('901', '4');
    });

    it('should set selectedDirection', () => {
      component.selectedRoute = '901';
      let spy = spyOn(service, 'getStops').and.returnValue(of(mockStops));
      component.directionSelected({value: '4'});

      expect(component.selectedDirection).toEqual('4');
    });

    it('should set selectedStop to undefined', () => {
      component.selectedRoute = '901';
      let spy = spyOn(service, 'getStops').and.returnValue(of(mockStops));
      component.directionSelected({value: '4'});

      expect(component.selectedStop).toBeUndefined();
    });

    it('should set stops', () =>{
      component.selectedRoute = '901';
      let spy = spyOn(service, 'getStops').and.returnValue(of(mockStops));
      component.directionSelected({value: '4'});

      expect(component.stops.length).toEqual(16);
      expect(component.stops[0].Text).toEqual(mockStops[0].Text);
      expect(component.stops[0].Value).toEqual(mockStops[0].Value);
      expect(component.stops[1].Text).toEqual(mockStops[1].Text);
      expect(component.stops[1].Value).toEqual(mockStops[1].Value);
      expect(component.stops[2].Text).toEqual(mockStops[2].Text);
      expect(component.stops[2].Value).toEqual(mockStops[2].Value);
      expect(component.stops[3].Text).toEqual(mockStops[3].Text);
      expect(component.stops[3].Value).toEqual(mockStops[3].Value);
      expect(component.stops[4].Text).toEqual(mockStops[4].Text);
      expect(component.stops[4].Value).toEqual(mockStops[4].Value);
      expect(component.stops[5].Text).toEqual(mockStops[5].Text);
      expect(component.stops[5].Value).toEqual(mockStops[5].Value);
      expect(component.stops[6].Text).toEqual(mockStops[6].Text);
      expect(component.stops[6].Value).toEqual(mockStops[6].Value);
      expect(component.stops[7].Text).toEqual(mockStops[7].Text);
      expect(component.stops[7].Value).toEqual(mockStops[7].Value);
      expect(component.stops[8].Text).toEqual(mockStops[8].Text);
      expect(component.stops[8].Value).toEqual(mockStops[8].Value);
      expect(component.stops[9].Text).toEqual(mockStops[9].Text);
      expect(component.stops[9].Value).toEqual(mockStops[9].Value);
      expect(component.stops[10].Text).toEqual(mockStops[10].Text);
      expect(component.stops[10].Value).toEqual(mockStops[10].Value);
      expect(component.stops[11].Text).toEqual(mockStops[11].Text);
      expect(component.stops[11].Value).toEqual(mockStops[11].Value);
      expect(component.stops[12].Text).toEqual(mockStops[12].Text);
      expect(component.stops[12].Value).toEqual(mockStops[12].Value);
      expect(component.stops[13].Text).toEqual(mockStops[13].Text);
      expect(component.stops[13].Value).toEqual(mockStops[13].Value);
      expect(component.stops[14].Text).toEqual(mockStops[14].Text);
      expect(component.stops[14].Value).toEqual(mockStops[14].Value);
      expect(component.stops[15].Text).toEqual(mockStops[15].Text);
      expect(component.stops[15].Value).toEqual(mockStops[15].Value);
    });
  });
});
