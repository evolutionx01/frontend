import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { C19checkstepsModule } from './c19checksteps/c19checksteps.module';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { AboutUsModule } from './about-us/about-us.module';
import { ContentComponent } from './shared/content/content.component';
import { LightboxModule } from 'ngx-lightbox';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, ContentComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    C19checkstepsModule,
    ReactiveFormsModule,
    NgbModule,
    YouTubePlayerModule,
    AboutUsModule,
    LightboxModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}