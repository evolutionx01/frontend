import { ExcelService } from './../../auth/excel.service';
import { MemberDetailsService } from './member-details.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.scss']
})
export class MemberDetailComponent implements OnInit {
  memberlist: any;

  constructor(
    private router: Router,
    private apiService: MemberDetailsService,
    private spinner: NgxSpinnerService,
    private excelService: ExcelService
    ) { }

  ngOnInit(): void {
    this.getRegisterMemberlist();
  }
  public logout(){
    sessionStorage.clear();
    this.router.navigate(['/']);
  }

  public getRegisterMemberlist() {
    this.spinner.show();
    this.apiService.getMembers().subscribe(
      data => {
        this.memberDetails(data);
      },
      error => {
        this.spinner.hide();
        console.log(error);
      }
    );
  }

  private memberDetails(data) {
    this.spinner.hide();
    console.log(data);
    if (data.statusCode === 200){
      this.memberlist = data.data;
    }else{
      this.memberlist = [];
    }
  }

  public generateReport(){
    this.excelService.exportAsExcelFile(this.memberlist, 'member');
  }

}
