import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseAdmin2Component } from './case-admin2.component';

describe('CaseAdmin2Component', () => {
  let component: CaseAdmin2Component;
  let fixture: ComponentFixture<CaseAdmin2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseAdmin2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseAdmin2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
