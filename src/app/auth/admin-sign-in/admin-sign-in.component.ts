import { JwtService } from './../jwt.service';
import { AdminSignInService } from './admin-sign-in.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-admin-sign-in',
  templateUrl: './admin-sign-in.component.html',
  styleUrls: ['./admin-sign-in.component.scss']
})
export class AdminSignInComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private apiService: AdminSignInService,
    private spinner: NgxSpinnerService,
    private jwtService: JwtService
    ) { }

  ngOnInit(): void {
    sessionStorage.clear();
    this.buildLoginForm();
  }

  public buildLoginForm(){
      this.loginForm = this.formBuilder.group({
        email: ['', Validators.email],
        password: ['', Validators.required]
      });
  }

  get f() { return this.loginForm.controls; }

  public onLogin() {
    console.log(this.loginForm.value);
    this.spinner.show();
    this.apiService.loginAdmin(this.loginForm.value).subscribe(
      data => {
        this.adminDetails(data);
      },
      error => {
        this.spinner.hide();
        console.log(error);
      }
    );
  }

  private adminDetails(data) {
    this.spinner.hide();
    console.log(data);
    if (data.statusCode === 200){
      // this.jwtService.setToken()
      sessionStorage.setItem('token', data.token);
      this.router.navigate(['/admin']);
    }
  }

}
