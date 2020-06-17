import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-setp-one',
  templateUrl: './setp-one.component.html',
  styleUrls: ['./setp-one.component.scss']
})
export class SetpOneComponent implements OnInit {
  public covidForm: FormGroup;
  constructor(
    private route: Router
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  public buildForm(){
    this.covidForm = new FormGroup({
      ageField: new FormControl('', [ Validators.required])
    });
  }

  public onSubmit(){
    this.route.navigate(['/step2']);
  }
}
