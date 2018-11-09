import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VasqiComponent } from './vasqi.component';

describe('VasqiComponent', () => {
  let component: VasqiComponent;
  let fixture: ComponentFixture<VasqiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VasqiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VasqiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
