import { Component, OnInit, HostListener } from '@angular/core';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

    // tslint:disable-next-line: ban-types
    public toggledStatus: Boolean = true;
    public innerWidth: any;
    @HostListener('window:resize', ['$event'])
    onResize(event?) {
      this.innerWidth = window.innerWidth;
      console.log(this.innerWidth);
      if (this.innerWidth <= 768){
        this.toggledStatus = false;
      }
    }
  constructor(
    private commonService: CommonService
  ) {
    this.onResize();
   }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth <= 768){
      this.toggledStatus = false;
    }

    this.commonService.$toggleObservable.subscribe(
      data => {
        this.toggledStatus = data;
      }
    );
  }

    public toggleSidebar(){
    this.toggledStatus = !this.toggledStatus;
  }


}
