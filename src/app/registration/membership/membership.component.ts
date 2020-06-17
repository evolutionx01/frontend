import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.scss']
})
export class MembershipComponent implements OnInit {

  registerForm: FormGroup;
  url: any = '';
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.url = '';
    this.buildRegisterForm();
  }


  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      // tslint:disable-next-line: no-shadowed-variable
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.registerForm.patchValue({
          file: reader.result
       });
        this.url = event.target.result;
      };
    }
  }


  public buildRegisterForm(){
    this.registerForm = this.formBuilder.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue],
      file: [null, Validators.required]
    });
  }

   // convenience getter for easy access to form fields
   get f() { return this.registerForm.controls; }

   onSubmit(){
     console.log(this.registerForm.value);
   }

   onReset(){
    this.registerForm.reset();
  }
}
