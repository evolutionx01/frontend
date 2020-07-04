import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversalConceptRoutingModule } from './universal-concept-routing.module';
import { UniversalConceptViewComponent } from './universal-concept-view/universal-concept-view.component';


@NgModule({
  declarations: [UniversalConceptViewComponent],
  imports: [
    CommonModule,
    UniversalConceptRoutingModule
  ]
})
export class UniversalConceptModule { }
