import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { C19checkstepsRoutingModule } from './c19checksteps-routing.module';
import { GetStratedComponent } from './get-strated/get-strated.component';
import { ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [GetStratedComponent],
  imports: [
    CommonModule,
    C19checkstepsRoutingModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class C19checkstepsModule { }
