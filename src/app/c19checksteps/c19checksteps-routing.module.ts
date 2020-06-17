import { TearmsAndConditionsComponent } from './tearms-and-conditions/tearms-and-conditions.component';
import { StepTwoComponent } from './step-two/step-two.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetStratedComponent } from './get-strated/get-strated.component';
import { SetpOneComponent } from './setp-one/setp-one.component';
import { StepThreeComponent } from './step-three/step-three.component';


const routes: Routes = [
  {
    path: '',
    component: GetStratedComponent
  },
  {
    path: 'step1',
    component: SetpOneComponent
  },
  {
    path: 'step2',
    component: StepTwoComponent
  },
  {
    path: 'terms-and-conditions',
    component: TearmsAndConditionsComponent
  },
  {
    path: 'step3',
    component: StepThreeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class C19checkstepsRoutingModule { }
