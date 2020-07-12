import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-content',
  templateUrl: './admin-content.component.html',
  styleUrls: ['./admin-content.component.scss']
})
export class AdminContentComponent implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit(): void {
  }

  public logout(){
    sessionStorage.clear();
    this.router.navigate(['/']);
  }

}
