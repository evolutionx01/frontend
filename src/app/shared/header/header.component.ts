import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isCollapsed: boolean;
  private array: [{}];
  constructor(
    // private authService: SocialAuthService
  ) {
   }
   ngOnInit(): void {
    this.isCollapsed = true;
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
