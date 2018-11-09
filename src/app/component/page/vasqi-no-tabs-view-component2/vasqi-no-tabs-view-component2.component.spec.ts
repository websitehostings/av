import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VasqiNoTabsViewComponent2Component } from './vasqi-no-tabs-view-component2.component';

describe('VasqiNoTabsViewComponent2Component', () => {
  let component: VasqiNoTabsViewComponent2Component;
  let fixture: ComponentFixture<VasqiNoTabsViewComponent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VasqiNoTabsViewComponent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VasqiNoTabsViewComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
