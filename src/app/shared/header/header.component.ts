import { Component, OnInit } from '@angular/core';
import { SocialAuthService, GoogleLoginProvider } from 'angularx-social-login';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private array: [{}];
  constructor(
    // private authService: SocialAuthService
  ) {
   }

  ngOnInit(): void {
    this.array = [
      {name: 'a'}
    ];
  }

  public onclick(){
    this.array.forEach(element => {
      console.log(element);
    });
  }

  // signInWithGoogle(): void {
  //   this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
  //     x => {
  //       this.signInWithGoogleData(x)
  //     }
  //   );
  // }

  // private signInWithGoogleData(data){
  //   console.log(data)
  // }

}
