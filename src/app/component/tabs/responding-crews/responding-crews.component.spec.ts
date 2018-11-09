import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RespondingCrewsComponent } from './responding-crews.component';

describe('RespondingCrewsComponent', () => {
  let component: RespondingCrewsComponent;
  let fixture: ComponentFixture<RespondingCrewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespondingCrewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RespondingCrewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
