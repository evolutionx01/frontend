import { DashboardViewService } from './dashboard-view.service';
import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.scss']
})
export class DashboardViewComponent implements OnInit {


  // tslint:disable-next-line: member-ordering
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  // tslint:disable-next-line: member-ordering
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  // tslint:disable-next-line: member-ordering
  public barChartType: ChartType = 'bar';
  // tslint:disable-next-line: member-ordering
  public barChartLegend = true;

// tslint:disable-next-line: member-ordering
  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];
  memberCount: any;
  consumerCount: any;

  constructor(
    private router: Router,
    private apiService: DashboardViewService,
    private spinner: NgxSpinnerService,
  ) {
   }

  ngOnInit(): void {
    this.getDashboardStatics();
  }


  public logout(){
    sessionStorage.clear();
    this.router.navigate(['/']);
  }

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    this.barChartData[0].data = data;
  }

  public getDashboardStatics() {
    this.spinner.show();
    this.apiService.getAnalytics().subscribe(
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
    if (data[0].statusCode === 200 && data[1].statusCode === 200){
      this.memberCount = data[0].count;
      this.consumerCount = data[1].count;

    }
  }

}
