import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HealthViewComponent } from './health-view/health-view.component';


const routes: Routes = [
  {
    path: '',
    component: HealthViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HealthRoutingModule { }
