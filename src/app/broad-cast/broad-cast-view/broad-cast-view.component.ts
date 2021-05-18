import { Component, OnInit } from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';
import {BroadCastViewService} from './broad-cast-view.service';

@Component({
  selector: 'app-broad-cast-view',
  templateUrl: './broad-cast-view.component.html',
  styleUrls: ['./broad-cast-view.component.scss']
})
export class BroadCastViewComponent implements OnInit {
  messageList: []
  constructor(
    private apiService: BroadCastViewService,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit(): void {
    this.getBroadcastMessages();
  }

  public getBroadcastMessages() {
    this.spinner.show();
    this.apiService.getMessages().subscribe(
      data => {
        this.messageDetails(data);
      },
      error => {
        this.spinner.hide();
        console.log(error);
      }
    );
  }

  private messageDetails(data) {
    this.spinner.hide();
    console.log(data);
    if (data.statusCode === 200){
      this.messageList = data.data;
    }else{
      this.messageList = [];
    }
  }

}
