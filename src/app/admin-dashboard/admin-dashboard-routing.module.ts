import { ConsumerDetailComponent } from './consumer-detail/consumer-detail.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BroadcastViewComponent} from './broadcast-view/broadcast-view.component';


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
  },
  {
    path: 'broadcast',
    component: BroadcastViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
