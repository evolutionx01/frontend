import { CommonService } from './../service/common.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-content',
  templateUrl: './admin-content.component.html',
  styleUrls: ['./admin-content.component.scss']
})
export class AdminContentComponent implements OnInit {
  toggledStatus: boolean;

  constructor(
    private router: Router,
    private commonService: CommonService
    ) { }

  ngOnInit(): void {
  }

  public logout(){
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  public toggleSidebar(){
    this.toggledStatus = !this.toggledStatus;
    this.commonService.toggleClicked(this.toggledStatus);
  }

}
