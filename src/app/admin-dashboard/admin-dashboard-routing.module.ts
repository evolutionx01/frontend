import { ConsumerDetailComponent } from './consumer-detail/consumer-detail.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: DashboardViewComponent
  },
  {
    path: 'member',
    component: MemberDetailComponent
  },
  {
    path: 'consumer',
    component: ConsumerDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
