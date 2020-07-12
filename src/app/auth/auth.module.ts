import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AdminSignInComponent } from './admin-sign-in/admin-sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AdminSignInComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
