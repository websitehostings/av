import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VasqiNoTabsViewComponent } from './vasqi-no-tabs-view.component';

describe('VasqiNoTabsViewComponent', () => {
  let component: VasqiNoTabsViewComponent;
  let fixture: ComponentFixture<VasqiNoTabsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VasqiNoTabsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VasqiNoTabsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
