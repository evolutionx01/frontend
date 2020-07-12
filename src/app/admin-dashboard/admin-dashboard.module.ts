import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { ChartsModule } from 'ng2-charts';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { ConsumerDetailComponent } from './consumer-detail/consumer-detail.component';


@NgModule({
  declarations: [DashboardViewComponent, MemberDetailComponent, ConsumerDetailComponent],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule,
    ChartsModule
  ]
})
export class AdminDashboardModule { }
