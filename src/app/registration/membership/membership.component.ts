import { Component, OnInit, Injectable, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MembershipService } from './membership.service';
import {NgbDateStruct, NgbCalendar, NgbDateAdapter, NgbTimeAdapter, NgbDateNativeAdapter, NgbTimeStruct, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

const pad = (i: number): string => i < 10 ? `0${i}` : `${i}`;
@Injectable()
export class NgbTimeStringAdapter extends NgbTimeAdapter<string> {

  fromModel(value: string| null): NgbTimeStruct | null {
    if (!value) {
      return null;
    }
    const split = value.split(':');
    return {
      hour: parseInt(split[0], 10),
      minute: parseInt(split[1], 10),
      second: parseInt(split[2], 10)
    };
  }

  toModel(time: NgbTimeStruct | null): string | null {
    return time != null ? `${pad(time.hour)}:${pad(time.minute)}:${pad(time.second)}` : null;
  }
}

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.scss'],
  providers: [{ provide: NgbDateAdapter, useClass: NgbDateNativeAdapter },  {provide: NgbTimeAdapter, useClass: NgbTimeStringAdapter}]
})
export class MembershipComponent implements OnInit {
  @ViewChild('confirmation') private confirmation;
  model: NgbDateStruct;
  time: NgbTimeStruct;
  registerForm: FormGroup;
  url: any = '';
  public fieldLabelen = {
    name: 'Official Name',
    birth_date: 'Birth Date',
    birth_day: 'Birth Day',
    birth_time: 'Birth Time',
    NRIC_new: 'NRIC No. (New)',
    NRIC_old: 'NRIC No. (Old)',
    marital_status: 'Marital status',
    gender: 'Gender',
    age: 'Age',
    mobile: 'Personal Mobile No.',
    whatsapp: 'WhatsApp No.',
    birth_religion: 'Birth Religion',
    current_religion: 'Current Religion',
    mother_tongue: 'Mother Tongue',
    universal_status: 'Universal Status',
    continent: 'Continent',
    descendant: 'Descendant',
    Education_level: 'Education Level',
    email: 'Email',
    fb: 'FB',
    twitter: 'Twitter',
    address: 'Current Home Address',
    town: 'Town',
    state: 'State',
    postal_code: 'Post Code',
    birth_place: 'Place of Birth',
    birth_town: 'Birth Town',
    language_title: 'Language Proficiency',
    th_title: 'Language',
    th_spoken: 'Spoken',
    th_reading: 'Reading',
    th_writing: 'Writing',
    economic_title: 'Economic Status',
    economic_type: 'Economic Type',
    economic_Business_type: 'Economic Business Type',
    income_gross: 'Gross Monthly Income',
    income_net: 'Nett Monthly Income',
    income_other: 'Other Income',
    employee_position: 'Position If Employee',
    business_type: 'Type of Business',
    monthly_expense: 'Current Monthly Expenses',
    adequate_income: 'Adequate Income Monthly',
    health: 'Health',
    general_knowledge: 'General Knowledge',
    financial: 'Financial',
    hapiness: 'Hapiness',
    leadership: 'Leadership',
    wish_economic_type: 'Economic Type',
    wish_income_mothly: 'Monthly Income',
    wish_type_business: 'Type of business',
    wish_type_employment: 'Type of Employment',
    wish_aim: 'Aim',
    wish_title: 'Wish',
    status_title: 'Life Status Now'
    };
  public selectedLanguage = 'en';
  public title = 'Member Application Form';
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private memService: MembershipService,
    private modalService: NgbModal,
    private spinner: NgxSpinnerService,
    private ngbCalendar: NgbCalendar, private dateAdapter: NgbDateAdapter<string>
    ) { }

  ngOnInit(): void {
    this.url = '';
    this.buildRegisterForm();
  }

  redirectToReg(){
    this.modalService.dismissAll();
    this.router.navigate(['/register']);

  }


  onChange(newValue) {
    console.log(newValue);
    this.selectedLanguage = newValue;
    if (newValue === 'en'){
     this.title = 'Member Application Form';
     this.fieldLabelen = {
      name: 'Official Name',
      birth_date: 'Birth Date',
      birth_day: 'Birth Day',
      birth_time: 'Birth Time',
      NRIC_new: 'NRIC No. (New)',
      NRIC_old: 'NRIC No. (Old)',
      marital_status: 'Marital status',
      gender: 'Gender',
      age: 'Age',
      mobile: 'Personal Mobile No.',
      whatsapp: 'WhatsApp No.',
      birth_religion: 'Birth Religion',
      current_religion: 'Current Religion',
      mother_tongue: 'Mother Tongue',
      universal_status: 'Universal Status',
      continent: 'Continent',
      descendant: 'Descendant',
      Education_level: 'Education Level',
      email: 'Email',
      fb: 'FB',
      twitter: 'Twitter',
      address: 'Current Home Address',
      town: 'Town',
      state: 'State',
      postal_code: 'Post Code',
      birth_place: 'Place of Birth',
      birth_town: 'Birth Town',
      language_title: 'Language Proficiency',
      th_title: 'Language',
      th_spoken: 'Spoken',
      th_reading: 'Reading',
      th_writing: 'Writing',
      economic_title: 'Economic Status',
      economic_type: 'Economic Type',
      economic_Business_type: 'Economic Business Type',
      income_gross: 'Gross Monthly Income',
      income_net: 'Nett Monthly Income',
      income_other: 'Other Income',
      employee_position: 'Position If Employee',
      business_type: 'Type of Business',
      monthly_expense: 'Current Monthly Expenses',
      adequate_income: 'Adequate Income Monthly',
      health: 'Health',
      general_knowledge: 'General Knowledge',
      financial: 'Financial',
      hapiness: 'Hapiness',
      leadership: 'Leadership',
      wish_economic_type: 'Economic Type',
      wish_income_mothly: 'Monthly Income',
      wish_type_business: 'Type of business',
      wish_type_employment: 'Type of Employment',
      wish_aim: 'Aim',
      wish_title: 'Wish',
      status_title: 'Life Status Now'
      };
    }else if (newValue === 'ma'){
      this.title = 'Borang Permohonan Ahli';
      this.fieldLabelen = {
        name: 'Nama Rasmi',
        birth_date: 'Tarikh lahir',
        birth_day: 'hari kelahiran',
        birth_time: 'masa kelahiran',
        NRIC_new: 'No. KPPN (New)',
        NRIC_old: 'No. KPPN (Old)',
        marital_status: 'Taraf Perkahwinan',
        gender: 'Jantina',
        age: 'Umur',
        mobile: 'No. Talian Mobil Peribadi',
        whatsapp: 'No. WhatsApp',
        birth_religion: 'Agama asal',
        current_religion: 'Bahasa Ibunda',
        mother_tongue: 'Bahasa Ibunda :',
        universal_status: 'Taraf Alam',
        continent: 'Benua',
        descendant: 'Keturunan',
        Education_level: 'Taraf Pendidikan',
        email: 'Emel',
        fb: 'FB',
        twitter: 'Twitter',
        address: 'Alamat Kediaman Terkini',
        town: 'Bandar',
        state: 'Negeri',
        postal_code: 'Negeri',
        birth_place: 'Berasal dari Negeri / Negara ( Tempat Lahir )',
        birth_town: 'Bandar Lahir',
        language_title: 'Kemahiran Bahasa',
        th_title: 'Bahasa',
        th_spoken: 'BERTUTUR',
        th_reading: 'MEMBACA',
        th_writing: 'MENULIS',
        economic_title: 'Status Ekonomi',
        economic_type: 'Bekerja atau Berniaga',
        economic_Business_type: 'Tunggal atau Kongsi',
        income_gross: 'Pendapatan Kasar Sebulan',
        income_net: 'Pendapatan Bersih Sebulan',
        income_other: 'Lain Lain Pendapatan',
        employee_position: 'Jawatan ( Jika Pekerja )',
        business_type: 'Jenis Perniagaan',
        monthly_expense: 'Perbelanjaan Setiap bulan pada masa kini',
        adequate_income: 'Pendapatan yang mencukupi ( Setiap Bulan )',
        health: 'Kesihatan',
        general_knowledge: 'Kesihatan',
        financial: 'Kewangan',
        hapiness: 'Kebahagian',
        leadership: 'Kepimpinan',
        wish_economic_type: 'Bekerja / Berniaga atau',
        wish_income_mothly: 'Pendapatan Sebulan',
        wish_type_business: 'Jenis Perniagaan',
        wish_type_employment: 'Jenis Pekerjaan',
        wish_aim: 'Berazam',
        wish_title: 'Hasrat',
        status_title: 'Status Kehidupan Pada Masa Kini'
        };
    }
      // ... do other stuff here ...
  }

  openConfirmationModal(confirmation){
    this.modalService.open(confirmation);
  }

  public addMember() {
    this.spinner.show();

    this.registerForm.patchValue({
      birth_date: new Date(this.f.birth_date.value).getTime()
    });

    this.memService.addmember(this.registerForm.value).subscribe(
      data => {
        this.memberDetails(data);
      },
      error => {
        this.spinner.hide();
        console.log(error);
      }
    );
  }

  private memberDetails(data) {
    this.spinner.hide();
    console.log(data);
    console.log(data);
    if (data.success){
      this.openConfirmationModal(this.confirmation);
    }
  }


  fileChange(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      // tslint:disable-next-line: no-shadowed-variable
      reader.onload = (event) => { // called once readAsDataURL is completed
        let base64 =  reader.result.toString();

        base64 = base64.split(';')[1].split(',')[1];

        // const byteCharacters = atob(base64);
        // const byteNumbers = new Array(byteCharacters.length);

        // for (let i = 0; i < byteCharacters.length; i++){
        //   byteNumbers[i] = byteCharacters.charCodeAt(i);
        // }
        // const byteArray = new Uint8Array(byteNumbers);

        // const base64 =  reader.result.toString();
        // base64.split(';')[0];
        // const binarystring = window.atob(base64);
        // const len = binarystring.length;
        // const bytes = new Uint8Array(len);
        // for (let i = 0; i < len; i++) {
        //    bytes[i] = binarystring.charCodeAt(i);
        // }

        this.registerForm.patchValue({
          file: base64
       });


        console.log(event.target.result);
        this.url = event.target.result;
      };
    }
  }


  public buildRegisterForm(){
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      birth_date: [null, Validators.required],
      birth_day: ['', Validators.required],
      birth_time: [null, [Validators.required, Validators.pattern(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/)]],
      NRIC_new: [null, [Validators.required, Validators.maxLength(12), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      NRIC_old: [null, Validators.pattern(/^-?(0|[1-9]\d*)?$/)],
      marital_status: ['', Validators.required],
      gender: ['', Validators.required],
      age: [0, [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      mobile: [0, [Validators.required, Validators.pattern(/^-?([0-9]\d*)?$/)]],
      whatsapp: [0, [Validators.required, Validators.pattern(/^-?([0-9]\d*)?$/)]],
      birth_religion: ['', Validators.required],
      current_religion: ['', Validators.required],
      mother_tongue: ['', Validators.required],
      universal_status: ['', Validators.required],
      continent: ['', Validators.required],
      descendant: ['', Validators.required],
      Education_level: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      fb: [''],
      twitter: [''],
      address: ['', Validators.required],
      town: ['', Validators.required],
      state: ['', Validators.required],
      postal_code: [null, [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      birth_place: ['', Validators.required],
      birth_town: ['', Validators.required],
      malay_spoken: [''],
      malay_reading: [''],
      malay_writting: [''],
      eng_spoken: [''],
      eng_reading: [''],
      eng_writting: [''],
      chinees_spoken: [''],
      chinees_reading: [''],
      chinees_writting: [''],
      tamil_spoken: [''],
      tamil_reading: [''],
      tamil_writting: [''],
      economic_type: ['', Validators.required],
      employee_position: [''],
      business_type: [''],
      economic_Business_type: [''],
      income_gross: [null, [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      income_net: [null, [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      income_other: [null, Validators.pattern(/^-?(0|[1-9]\d*)?$/)],
      monthly_expense: [null, [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      adequate_income: [null, [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      health: ['', Validators.required],
      general_knowledge: ['', Validators.required],
      financial: ['', Validators.required],
      hapiness: ['', Validators.required],
      leadership: ['', Validators.required],
      wish_economic_type: [''],
      wish_income_mothly: [null, Validators.pattern(/^-?(0|[1-9]\d*)?$/)],
      wish_type_business: [''],
      wish_type_employment: [''],
      wish_aim: [''],
      file: ['']
    });
  }

   // convenience getter for easy access to form fields
   get f() { return this.registerForm.controls; }

   onReset(){
    this.registerForm.reset();
  }
}
