import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tearms-and-conditions',
  templateUrl: './tearms-and-conditions.component.html',
  styleUrls: ['./tearms-and-conditions.component.scss']
})
export class TearmsAndConditionsComponent implements OnInit {

  constructor(
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  public onAccept(){
this.route.navigate(['/step1']);
  }

  public onDecline(){
    this.route.navigate(['/']);
  }
}
