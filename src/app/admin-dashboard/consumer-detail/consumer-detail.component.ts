import { ConsumerDetailsService } from './consumer-details.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-consumer-detail',
  templateUrl: './consumer-detail.component.html',
  styleUrls: ['./consumer-detail.component.scss']
})
export class ConsumerDetailComponent implements OnInit {
  consumerlist: any[];

  constructor(
    private router: Router,
    private apiService: ConsumerDetailsService,
    private spinner: NgxSpinnerService
    ) { }

  ngOnInit(): void {
    this.getRegisteredConsumerList();
  }
  public getRegisteredConsumerList() {
    this.spinner.show();
    this.apiService.getConsumers().subscribe(
      data => {
        this.consumerDetails(data);
      },
      error => {
        this.spinner.hide();
        console.log(error);
      }
    );
  }

  private consumerDetails(data) {
    this.spinner.hide();
    console.log(data);
    if (data.statusCode === 200){
      this.consumerlist = data.data;
    }else{
      this.consumerlist = [];
    }
  }

}
