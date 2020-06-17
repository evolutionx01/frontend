import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private array: [{}];
  constructor() {
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

}
