import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutusViewComponent } from './aboutus-view/aboutus-view.component';
import { LightboxModule } from 'ngx-lightbox';


@NgModule({
  declarations: [AboutusViewComponent],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    LightboxModule
  ]
})
export class AboutUsModule { }
