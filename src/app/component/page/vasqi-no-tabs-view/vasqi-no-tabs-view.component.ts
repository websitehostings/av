import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-vasqi-no-tabs-view',
  templateUrl: './vasqi-no-tabs-view.component.html',
  styleUrls: ['./vasqi-no-tabs-view.component.scss']
})
export class VasqiNoTabsViewComponent implements OnInit {

  vasqiTabs: ModelVasqiOld;

  vasqiData: Array<ModelVasqi>;

  vasqiHeader: Array<ModelVasqiHeader>;

  vasqiStatus;

  constructor() { }

  ngOnInit() {
    this.vasqiTabs = new ModelVasqiOld();
    // tslint:disable-next-line:max-line-length
    this.vasqiTabs.left = ['Case Administrative Details', 'Patient Details', 'Responding Crews', 'Assessment', 'Vital Sign Survey', 'Patient Management', 'Timeframes'];

    // tslint:disable-next-line:max-line-length
    this.vasqiTabs.right = ['Patient Destination', 'Hospital Information', 'Search Information', 'Pt Follow-Up', 'Case Audit', 'Patient Safety Review', 'Quality Control'];

    this.vasqiData = [
      { left: 'Case Administrative Details', right: 'Patient Destination'},
      { left: 'Patient Details', right: 'Hospital Information'},
      { left: 'Responding Crews', right: 'Search Information'},
      { left: 'Assessment', right: 'Pt Follow-Up'},
      { left: 'Vital Sign Survey', right: 'Case Audit'},
      { left: 'Patient Management', right: 'Patient Safety Review'},
      { left: 'Timeframes', right: 'Quality Control'},
    ];

    this.vasqiHeader = [
      {key1: 'Case Number', value1: '1011', key2: 'Patient Name', value2: 'John Cena'},
      {key1: 'Case Date', value1: '11-Nov-2018', key2: 'Status', value2: 'Approved'}
    ];

    this.vasqiStatus = 1;
  }

}


export class ModelVasqiOld {
  left: Array<string>;
  right: Array<string>;
}

export class ModelVasqi1Old {
    // tslint:disable-next-line:max-line-length
    left: Array<string> = ['Case Administrative Details', 'Patient Details', 'Responding Crews', 'Assessment', 'Vital Sign Survey', 'Patient Management', 'Timeframes'];
    // tslint:disable-next-line:max-line-length
    right: Array<string> = ['Patient Destination', 'Hospital Information', 'Search Information', 'Pt Follow-Up', 'Case Audit', 'Patient Safety Review', 'Quality Control'];
}

export class ModelVasqi {
  left: string;
  right: string;
}

export class ModelVasqiHeader {
  key1: string;
  value1: string;
  key2: string;
  value2: string;
}

