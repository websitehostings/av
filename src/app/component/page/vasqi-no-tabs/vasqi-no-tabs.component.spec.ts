import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VasqiNoTabsComponent } from './vasqi-no-tabs.component';

describe('VasqiNoTabsComponent', () => {
  let component: VasqiNoTabsComponent;
  let fixture: ComponentFixture<VasqiNoTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VasqiNoTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VasqiNoTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
