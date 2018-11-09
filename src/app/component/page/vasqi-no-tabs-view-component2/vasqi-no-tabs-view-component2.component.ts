import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vasqi-no-tabs-view-component2',
  templateUrl: './vasqi-no-tabs-view-component2.component.html',
  styleUrls: ['./vasqi-no-tabs-view-component2.component.scss']
})
export class VasqiNoTabsViewComponent2Component implements OnInit {

  vasqistatusArray: string[];
  vasqistatusSelected;


  vasqiTabs: ModelVasqiOld;

  vasqiData: Array<ModelVasqi>;
  vasqiAllData: Array<ModelAllVasqi>;

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
      {key1: 'Case Number', value1: '1011', key2: 'Patient', value2: 'John Cena'},
      {key1: 'Case Date', value1: '11-Nov-2018', key2: 'Status', value2: 'Approved'}
    ];

    this.vasqiAllData = [
      { text: 'Case Admin Details', img: 'fa-book'},
      { text: 'Patient Details', img: 'fa-user'},
      { text: 'Responding Crews', img: 'fa-ambulance'},
      { text: 'Assessment', img: 'fa-bar-chart'},
      { text: 'Vital Sign Survey', img: 'fa-heartbeat'},
      { text: 'Patient Management', img: 'fa-bed'},
      { text: 'Timeframes', img: 'fa-clock-o'},
      { text: 'Patient Destination', img: 'fa-hospital-o'},
      { text: 'Hospital Information', img: 'fa-info'},
      { text: 'Search Information', img: 'fa-search'},
      { text: 'Patient Follow-Up', img: 'fa-list-alt'},
      { text: 'Case Audit', img: 'fa-briefcase'},
      { text: 'Pt Safety Review', img: 'fa-line-chart'},
      { text: 'Quality Control', img: 'fa-star'}
    ];

    this.vasqistatusArray = ['Approved', 'Rejected', 'Closed'];
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

export class ModelAllVasqi {
  text: string;
  img: string;
}
