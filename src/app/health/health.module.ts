import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HealthRoutingModule } from './health-routing.module';
import { HealthViewComponent } from './health-view/health-view.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [HealthViewComponent],
  imports: [
    CommonModule,
    HealthRoutingModule,
    NgbModule
  ]
})
export class HealthModule { }
