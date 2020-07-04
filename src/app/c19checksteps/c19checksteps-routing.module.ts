import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetStratedComponent } from './get-strated/get-strated.component';



const routes: Routes = [
  {
    path: '',
    component: GetStratedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class C19checkstepsRoutingModule { }
