import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';

import { AppComponent } from '../app/component/layout/app.component';
import { GlobalHeaderComponent } from './component/layout/global-header/global-header.component';
import { CaseAdminComponent } from './component/tabs/case-admin/case-admin.component';
import { GlobalFooterComponent } from './component/layout/global-footer/global-footer.component';
import { VasqiComponent } from './component/page/vasqi/vasqi.component';
import { PatientComponent } from './component/tabs/patient/patient.component';
import { RespondingCrewsComponent } from './component/tabs/responding-crews/responding-crews.component';
import { GlobalNavComponent } from './component/layout/global-nav/global-nav.component';
import { VasqiNoTabsComponent } from './component/page/vasqi-no-tabs/vasqi-no-tabs.component';
import { CaseAdmin2Component } from './component/tabs/case-admin2/case-admin2.component';
import { VasqiNoTabsViewComponent } from './component/page/vasqi-no-tabs-view/vasqi-no-tabs-view.component';
import { VasqiNoTabsViewComponent2Component } from './component/page/vasqi-no-tabs-view-component2/vasqi-no-tabs-view-component2.component';

const appRoutes: Routes = [
  { path: 'home', component: VasqiNoTabsViewComponent2Component },
  { path: 'caseadmin', component: CaseAdminComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: VasqiNoTabsViewComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    GlobalHeaderComponent,
    CaseAdminComponent,
    GlobalFooterComponent,
    VasqiComponent,
    PatientComponent,
    RespondingCrewsComponent,
    GlobalNavComponent,
    VasqiNoTabsComponent,
    CaseAdmin2Component,
    VasqiNoTabsViewComponent,
    VasqiNoTabsViewComponent2Component
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatRadioModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
