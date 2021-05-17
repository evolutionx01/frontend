import { BroadCastRoutingModule } from './broad-cast-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BroadCastViewComponent } from './broad-cast-view/broad-cast-view.component';



@NgModule({
  declarations: [BroadCastViewComponent],
  imports: [
    CommonModule,
    BroadCastRoutingModule
  ]
})
export class BroadCastModule { }
