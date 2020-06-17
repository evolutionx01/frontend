import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.scss']
})
export class StepThreeComponent implements OnInit {

  public covidSymptomsForm: FormGroup;
  constructor(
    private  route: Router
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  public buildForm(){
    this.covidSymptomsForm = new FormGroup({
      symptomField: new FormControl(null, [ Validators.required])
    });
  }

  public onSubmit(){
    this.route.navigate(['/step4']);
  }

  public onPrevious(){
    this.route.navigate(['/step2']);
  }

}
