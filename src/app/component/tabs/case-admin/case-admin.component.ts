import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';  //Reactive Forms

@Component({
  selector: 'app-case-admin',
  templateUrl: './case-admin.component.html',
  styleUrls: ['./case-admin.component.scss']
})
export class CaseAdminComponent implements OnInit {

  vasqiAcknowlegdeArray: Array<string>;
  vasqiAcknowlegdeSelected;

  constructor(private fb: FormBuilder) { }

  caseAdminForm: FormGroup;

  ngOnInit() {
    this.caseAdminForm = this.fb.group({
      primaryCaseNumber: ['', [Validators.required, Validators.minLength(3)]],
      acknowledgment: 1
    });

    this.vasqiAcknowlegdeArray = ['Reviewed', 'Irrelevant', 'To be reviewed', 'Case Complete'];
  }

  save(caseAdminForm) {
    console.log(caseAdminForm);
  }

}
