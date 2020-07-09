import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchRouteComponent } from './research-route.component';

describe('ResearchRouteComponent', () => {
  let component: ResearchRouteComponent;
  let fixture: ComponentFixture<ResearchRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearchRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 3 routes', () => {
    expect(component.routes.length).toEqual(3);
  });
});
