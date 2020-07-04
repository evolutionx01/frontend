import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamViewComponent } from './team-view/team-view.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';

const routes: Routes = [
  {
    path: '',
    component: TeamViewComponent
  },
  {
    path: 'details',
    component: TeamDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamRoutingModule { }
