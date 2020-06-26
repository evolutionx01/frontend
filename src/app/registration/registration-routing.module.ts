import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MembershipComponent } from './membership/membership.component';
import { RegisterViewComponent } from './register-view/register-view.component';
import { ConsumerComponent } from './consumer/consumer.component';



const routes: Routes = [
  {
    path: '',
    component: RegisterViewComponent,
  },
  {
    path: 'member',
    component: MembershipComponent
  },
  {
    path: 'consumer',
    component: ConsumerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
