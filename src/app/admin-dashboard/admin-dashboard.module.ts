import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { ChartsModule } from 'ng2-charts';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { ConsumerDetailComponent } from './consumer-detail/consumer-detail.component';
import { BroadcastViewComponent } from './broadcast-view/broadcast-view.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxSpinnerModule} from 'ngx-spinner';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [DashboardViewComponent, MemberDetailComponent, ConsumerDetailComponent, BroadcastViewComponent],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule,
    ChartsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule,
  ]
})
export class AdminDashboardModule { }
