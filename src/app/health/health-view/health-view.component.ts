import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-health-view',
  templateUrl: './health-view.component.html',
  styleUrls: ['./health-view.component.scss']
})
export class HealthViewComponent implements OnInit {
  active = 'top';
  constructor() { }

  ngOnInit(): void {
  }

}
