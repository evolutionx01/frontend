import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembershipComponent } from './membership/membership.component';
import { RegistrationRoutingModule } from './registration-routing.module';
import { ConsumerComponent } from './consumer/consumer.component';
import { RegisterViewComponent } from './register-view/register-view.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [MembershipComponent, ConsumerComponent, RegisterViewComponent],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule,
  ]
})
export class RegistrationModule {}
