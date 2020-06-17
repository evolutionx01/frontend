import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { C19checkstepsRoutingModule } from './c19checksteps-routing.module';
import { GetStratedComponent } from './get-strated/get-strated.component';
import { SetpOneComponent } from './setp-one/setp-one.component';
import { StepTwoComponent } from './step-two/step-two.component';
import { TearmsAndConditionsComponent } from './tearms-and-conditions/tearms-and-conditions.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StepThreeComponent } from './step-three/step-three.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { YouTubePlayerModule } from '@angular/youtube-player';


@NgModule({
  declarations: [GetStratedComponent, SetpOneComponent, StepTwoComponent, TearmsAndConditionsComponent, StepThreeComponent],
  imports: [
    CommonModule,
    C19checkstepsRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    YouTubePlayerModule
  ]
})
export class C19checkstepsModule { }
