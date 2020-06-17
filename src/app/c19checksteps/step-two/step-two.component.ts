import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss']
})
export class StepTwoComponent implements OnInit {

  public covidLocationForm: FormGroup;
  constructor(
    private  route: Router
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }


  public buildForm(){
    this.covidLocationForm = new FormGroup({
      countryField: new FormControl(null, [ Validators.required]),
      codeField: new FormControl('', [ Validators.required])
    });
  }

  public onSubmit(){
    this.route.navigate(['/step3']);
  }

  public onPrevious(){
    this.route.navigate(['/step1']);
  }

}
