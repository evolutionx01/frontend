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
  selectedFiles: FileList;
  url: any = '';
  public weekdays = [
    {text: 'Sunday', value: 'sunday'},
    {text: 'Monday', value: 'monday'},
    {text: 'Tuesday', value: 'tuesday'},
    {text: 'Wednesday', value: 'wednesday'},
    {text: 'Thursday', value: 'thursday'},
    {text: 'Friday', value: 'friday'},
    {text: 'Saturday', value: 'saturday'}
  ];
  public mStatus = [
    {text: 'Married', value: 'married'},
    {text: 'Single', value: 'single'},
  ];
  public genderOption = [
    {text: 'Male', value: 'male'},
    {text: 'Female', value: 'female'},
  ];
  public universalOption = [
    {text: 'National (Native)', value: 'national'},
    {text: 'Citizen (Immigrant)', value: 'citizen'},
  ];
  public educationalOption = [
    {text: 'Primary', value: 'primary'},
    {text: 'Secondary', value: 'sec'},
    {text: 'Higher', value: 'hig'},
    {text: 'Institute', value: 'inst'},
    {text: 'College', value: 'coll'},
    {text: 'University', value: 'uni'}
  ];
  public typeOption = [
    {text: 'Business', value: 'business'},
    {text: 'Employment', value: 'employment'},
  ];
  public statusOption = [
    {text: 'Not Good', value: 'notgood'},
    {text: 'Simple', value: 'simple'},
    {text: 'Well', value: 'well'},
    {text: 'Perfect', value: 'perfect'},
  ];
  public fieldLabelen = {
    name: 'Official Name (As In NRIC)',
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
    postal_code: 'Postcode',
    birth_place: 'Place of Birth',
    birth_town: 'Birth Town',
    language_title: 'Language Proficiency',
    th_title: 'Language',
    th_spoken: 'Spoken',
    th_reading: 'Reading',
    th_writing: 'Writing',
    economic_title: 'Economic Status',
    economic_type: 'Economic Type',
    economic_Business_type: 'Sole Proprietor or Partner (If do business)',
    income_gross: 'Gross Monthly Income',
    income_net: 'Nett Monthly Income',
    income_other: 'Other Income',
    employee_position: 'Position (If Employee)',
    business_type: 'Type of Business',
    monthly_expense: 'Current Monthly Expenses',
    adequate_income: 'Adequate Income (Monthly)',
    health: 'Health',
    general_knowledge: 'General Knowledge',
    financial: 'Financial',
    hapiness: 'Hapiness',
    leadership: 'Leadership',
    wish_economic_type: 'Employment / Business',
    wish_income_mothly: 'Monthly Income',
    wish_type_business: 'Type of business',
    wish_type_employment: 'Type of Employment',
    wish_aim: 'Aim',
    wish_title: 'Wish',
    status_title: 'Life Status Now',
    upload_photo: 'Upload Photo',
    choose_file: 'Choose File',
    browse : 'Browse'
    };
    public proficiencyOption = [
      {text: 'Fluent', value: 'fluent'},
      {text: 'Average', value: 'average'},
      {text: 'Weak', value: 'weak'},
      {text: 'Ignorance', value: 'ignorance'}
    ];
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
     this.registerForm.reset();
     this.title = 'Member Application Form';
     this.weekdays = [
      {text: 'Sunday', value: 'sunday'},
      {text: 'Monday', value: 'monday'},
      {text: 'Tuesday', value: 'tuesday'},
      {text: 'Wednesday', value: 'wednesday'},
      {text: 'Thursday', value: 'thursday'},
      {text: 'Friday', value: 'friday'},
      {text: 'Saturday', value: 'saturday'}
    ];
     this.mStatus = [
      {text: 'Married', value: 'married'},
      {text: 'Single', value: 'single'},
    ];
     this.genderOption = [
      {text: 'Male', value: 'male'},
      {text: 'Female', value: 'female'},
    ];
     this.universalOption = [
      {text: 'National (Native)', value: 'national'},
      {text: 'Citizen (Immigrant)', value: 'citizen'},
    ];
     this.educationalOption = [
      {text: 'Primary', value: 'primary'},
      {text: 'Secondary', value: 'sec'},
      {text: 'Higher', value: 'hig'},
      {text: 'Institute', value: 'inst'},
      {text: 'College', value: 'coll'},
      {text: 'University', value: 'uni'}
    ];
     this.proficiencyOption = [
      {text: 'Fluent', value: 'fluent'},
      {text: 'Average', value: 'average'},
      {text: 'Weak', value: 'weak'},
      {text: 'Ignorance', value: 'ignorance'}
    ];
     this.typeOption = [
      {text: 'Business', value: 'business'},
      {text: 'Employment', value: 'employment'},
    ];
     this.statusOption = [
      {text: 'Not Good', value: 'notgood'},
      {text: 'Simple', value: 'simple'},
      {text: 'Well', value: 'well'},
      {text: 'Perfect', value: 'perfect'},
    ];
     this.fieldLabelen = {
      name: 'Official Name (As In NRIC)',
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
      postal_code: 'Postcode',
      birth_place: 'Place of Birth',
      birth_town: 'Birth Town',
      language_title: 'Language Proficiency',
      th_title: 'Language',
      th_spoken: 'Spoken',
      th_reading: 'Reading',
      th_writing: 'Writing',
      economic_title: 'Economic Status',
      economic_type: 'Economic Type',
      economic_Business_type: 'Sole Proprietor or Partner (If do business)',
      income_gross: 'Gross Monthly Income',
      income_net: 'Nett Monthly Income',
      income_other: 'Other Income',
      employee_position: 'Position (If Employee)',
      business_type: 'Type of Business',
      monthly_expense: 'Current Monthly Expenses',
      adequate_income: 'Adequate Income (Monthly)',
      health: 'Health',
      general_knowledge: 'General Knowledge',
      financial: 'Financial',
      hapiness: 'Hapiness',
      leadership: 'Leadership',
      wish_economic_type: 'Employment / Business',
      wish_income_mothly: 'Monthly Income',
      wish_type_business: 'Type of business',
      wish_type_employment: 'Type of Employment',
      wish_aim: 'Aim',
      wish_title: 'Wish',
      status_title: 'Life Status Now',
      upload_photo: 'Upload Photo',
      choose_file: 'Choose File',
      browse : 'Browse'
     };
    }else if (newValue === 'ma'){
      this.registerForm.reset();
      this.title = 'Borang Permohonan Ahli / Member Application Form';
      this.weekdays = [
        {text: 'Ahad / Sunday', value: 'sunday'},
        {text: 'Isnin / Monday', value: 'monday'},
        {text: 'Selesa/ Tuesday', value: 'tuesday'},
        {text: 'Rabu / Wednesday', value: 'wednesday'},
        {text: 'Khamis / Thursday', value: 'thursday'},
        {text: 'Jumaat / Friday', value: 'friday'},
        {text: 'Sabtu / Saturday', value: 'saturday'}
      ];
      this.mStatus = [
        {text: 'Berkahwin / Married', value: 'married'},
        {text: 'Bujang / Single', value: 'single'},
      ];
      this.genderOption = [
        {text: 'Lelaki / Male', value: 'male'},
        {text: 'Perempuan / Female', value: 'female'},
      ];
      this.universalOption = [
        {text: 'Nasional (Kelahiran Tanah Air) / National (Native)', value: 'national'},
        {text: 'Warganegara (Pendatang) / Citizen (Immigrant)', value: 'citizen'},
      ];
      this.educationalOption = [
        {text: 'Rendah / Primary', value: 'primary'},
        {text: 'Menengah / Secondary', value: 'sec'},
        {text: 'Tinggi / Higher', value: 'hig'},
        {text: 'Institut / Institute', value: 'inst'},
        {text: 'Kolej / College', value: 'coll'},
        {text: 'Universiti / University', value: 'uni'}
      ];
      this.proficiencyOption = [
        {text: 'Fasih / Fluent', value: 'fluent'},
        {text: 'Sederhana / Average', value: 'average'},
        {text: 'Lemah / Weak', value: 'weak'},
        {text: 'Kejahilan / Ignorance', value: 'ignorance'}
      ];
      this.typeOption = [
        {text: 'Berniaga / Business', value: 'business'},
        {text: 'Bekerja / Employment', value: 'employment'},
      ];
      this.statusOption = [
        {text: 'Kurang Baik / Not Good', value: 'notgood'},
        {text: 'Sederhana / Simple', value: 'simple'},
        {text: 'Baik / Well', value: 'well'},
        {text: 'Sempurna / Perfect', value: 'perfect'},
      ];
      this.fieldLabelen = {
        name: 'Nama Rasmi (seperti di kad pengenalan) / Official Name (As In NRIC)',
        birth_date: 'Tarikh Kelahiran / Birth Date',
        birth_day: 'Hari kelahiran / Birth Day',
        birth_time: 'Waktu Kelahiran / Birth Time',
        NRIC_new: 'No. KPPN (Baharu) / NRIC No. (New)',
        NRIC_old: 'No. KPPN (Lama) / NRIC No. (Old)',
        marital_status: 'Taraf Perkahwinan / Marital Status',
        gender: 'Jantina / Gender',
        age: 'Umur / Age',
        mobile: 'No. Telefon Bimbit Peribadi / Personal Mobile No.',
        whatsapp: 'No. WhatsApp / Whatsapp No.',
        birth_religion: 'Agama Asal / Birth Religion',
        current_religion: 'Agama Kini / Current Religion',
        mother_tongue: 'Bahasa Ibunda / Mother Tongue',
        universal_status: 'Taraf Alam / Universal Status',
        continent: 'Benua / Continent',
        descendant: 'Keturunan / Descendant',
        Education_level: 'Taraf Pendidikan / Education Level',
        email: 'E-mel / Email',
        fb: 'FB',
        twitter: 'Twitter',
        address: 'Alamat Rumah Terkini / Current Home Address',
        town: 'Bandar / Town',
        state: 'Negeri / State',
        postal_code: 'Poskod / Postcode',
        birth_place: 'Berasal dari Negeri / Negara ( Tempat Lahir ) / Place of Birth',
        birth_town: 'Bandar Kelahiran / Birth Town',
        language_title: 'Penguasaan Bahasa / Language Proficiency',
        th_title: 'Bahasa / Language',
        th_spoken: 'BERTUTUR / Spoken',
        th_reading: 'MEMBACA / Reading',
        th_writing: 'MENULIS / Writing',
        economic_title: 'Status Ekonomi',
        economic_type: 'Jenis Ekonomi/ Economic Type',
        economic_Business_type: 'Pemilikan Tunggal atau Rakan Kongsi (Jika Berniaga) / Sole Proprietor or Partner (If do business).',
        income_gross: 'Pendapatan Kasar Sebulan / Gross Monthly Income',
        income_net: 'Pendapatan Bersih Sebulan / Nett Monthly Income',
        income_other: 'Lain Lain Pendapatan / Other Income',
        employee_position: 'Jawatan (Sekiranya anda seorang pekerja) / Position (If Employee)',
        business_type: 'Jenis Perniagaan / Type of Business',
        monthly_expense: 'Perbelanjaan sebulan yang terkini / Current Monthly Expenses',
        adequate_income: 'Pendapatan yang akan mencukupi (Setiap Bulan) / Adequate Income (Monthly)',
        health: 'Kesihatan / Health',
        general_knowledge: 'Pengetahuan Am / General Knowledge',
        financial: 'Kewangan / Financial',
        hapiness: 'Kebahagian / Hapiness',
        leadership: 'Kepimpinan / Leadership',
        wish_economic_type: 'Bekerja atau Berniaga / Employment or Business',
        wish_income_mothly: 'Pendapatan Sebulan / Monthly Income',
        wish_type_business: 'Jenis Perniagaan / Type of business',
        wish_type_employment: 'Jenis Pekerjaan / Type of Employment',
        wish_aim: 'Berazam / Aim',
        wish_title: 'Hasrat / Wish',
        status_title: 'Taraf Kehidupan Pada Masa Kini / Life Status Now',
        upload_photo: 'Muat Naik Gambar / Upload Photo',
        choose_file: 'Pilih Fail / Choose File',
        browse : 'Melayari / Browse'
        };
    }else if (newValue === 'ch'){
      this.registerForm.reset();
      this.title = '會員 應用 形成 / Member Application Form';
      this.weekdays = [
        {text: '星期天 / Sunday', value: 'sunday'},
        {text: '星期一 / Monday', value: 'monday'},
        {text: '星期二 / Tuesday', value: 'tuesday'},
        {text: '星期三 / Wednesday', value: 'wednesday'},
        {text: '星期四 / Thursday', value: 'thursday'},
        {text: '星期五 / Friday', value: 'friday'},
        {text: '星期六 / Sunday', value: 'saturday'}
      ];
      this.mStatus = [
        {text: '已婚 / Married', value: 'married'},
        {text: '单身 / Single', value: 'single'},
      ];
      this.genderOption = [
        {text: '男 / Male', value: 'male'},
        {text: '女 / Female', value: 'female'},
      ];
      this.universalOption = [
        {text: '国家（本地）/ National (Native)', value: 'national'},
        {text: '公民（移民) / Citizen (Immigrant)', value: 'citizen'},
      ];
      this.proficiencyOption = [
        {text: '流利程度 / Fluent', value: 'fluent'},
        {text: '平均 / Average', value: 'average'},
        {text: '弱 / Weak', value: 'weak'},
        {text: '不知 / Ignorance', value: 'ignorance'}
      ];
      this.educationalOption = [
        {text: '小学 / Primary', value: 'primary'},
        {text: '中学 / Secondary', value: 'sec'},
        {text: '高等教育 / Higher', value: 'hig'},
        {text: '研究所 / Institute', value: 'inst'},
        {text: '学院 / College', value: 'coll'},
        {text: '大学 / University', value: 'uni'}
      ];
      this.typeOption = [
        {text: '生意 / Business', value: 'business'},
        {text: '雇佣 / Employment', value: 'employment'},
      ];
      this.statusOption = [
        {text: '不好 / Not Good', value: 'notgood'},
        {text: '简单 / Simple', value: 'simple'},
        {text: '好 / Well', value: 'well'},
        {text: '完美 / Perfect', value: 'perfect'},
      ];
      this.fieldLabelen = {
        name: '姓名（与您的身份证相同）/ Official Name (As In NRIC)',
        birth_date: '出生日期 / Birth Date',
        birth_day: '生日 / Birth Day',
        birth_time: '出生时间 / Birth Time',
        NRIC_new: '身份证号码（新）/ NRIC No. (New)',
        NRIC_old: '身份证号码（旧）/ NRIC No. (Old)',
        marital_status: '婚姻状况 / Marital status',
        gender: '性别 / Gender',
        age: '年龄 / Age',
        mobile: '个人手机号码 / Personal Mobile No.',
        whatsapp: 'Whatsapp 号码 / WhatsApp No.',
        birth_religion: '出生宗教 / Birth Religion',
        current_religion: '当前宗教 / Current Religion',
        mother_tongue: '母语 / Mother Tongue',
        universal_status: '普遍地位 / Universal Status',
        continent: '大陆 / Continent',
        descendant: '后裔 / Descendant',
        Education_level: '学历 / Education Level',
        email: '电邮 / Email',
        fb: '面子书 / FB',
        twitter: '推特 / Twitter',
        address: '当前家庭住址 / Current Home Address',
        town: '城市 / Town',
        state: '州 / State',
        postal_code: '邮政编码 / Postcode',
        birth_place: '出生地 / Place of Birth',
        birth_town: '出生城市 / Birth Town',
        language_title: '语言能力 / Language Proficiency',
        th_title: '语言 / Language',
        th_spoken: '会话 / Spoken',
        th_reading: '阅读 / Reading',
        th_writing: '写作 / Writing',
        economic_title: 'Economic Status',
        economic_type: '经济类型 / Economic Type',
        economic_Business_type: '业务类型 / Sole Proprietor or Partner (If do business)',
        income_gross: '每月总收入 / Gross Monthly Income',
        income_net: '每月净收入 / Nett Monthly Income',
        income_other: '其他的收入 / Other Income',
        employee_position: '职位名称（如果您是员工）/ Position (If Employee)',
        business_type: 'Type of Business',
        monthly_expense: '当前每月费用 / Current Monthly Expenses',
        adequate_income: '每月足够收入 / Adequate Income (Monthly)',
        health: '健康 / Health',
        general_knowledge: '基本知识 / General Knowledge',
        financial: '金融 / Financial',
        hapiness: '幸福程度 / Hapiness',
        leadership: '领导能力 / Leadership',
        wish_economic_type: '经济类型 / Employment / Business',
        wish_income_mothly: '每月收入 / Monthly Income',
        wish_type_business: '业务类型 / Type of business',
        wish_type_employment: '工作类型 / Type of Employment',
        wish_aim: '目标 / Aim',
        wish_title: '愿望 / Wish',
        status_title: '当前生活状态 / Life Status Now',
        upload_photo: '上传照片 / Upload Photo',
        choose_file: '选择文件 / Choose File',
        browse : '浏览 / Browse'
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
    if (data.success){
      this.openConfirmationModal(this.confirmation);
    }
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    const file = this.selectedFiles.item(0);
    this.memService.uploadFile(file)
  }

  fileChange(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      // tslint:disable-next-line: no-shadowed-variable
      reader.onload = (event) => { // called once readAsDataURL is completed
        let base64 =  reader.result.toString();

        base64 = base64.split(';')[1].split(',')[1];

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
      marital_status: [null, Validators.required],
      gender: [null, Validators.required],
      age: [null, [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      mobile: [null, [Validators.required, Validators.pattern(/^-?([0-9]\d*)?$/)]],
      whatsapp: [null, [Validators.required, Validators.pattern(/^-?([0-9]\d*)?$/)]],
      birth_religion: ['', Validators.required],
      current_religion: ['', Validators.required],
      mother_tongue: ['', Validators.required],
      universal_status: [null, Validators.required],
      continent: ['', Validators.required],
      descendant: ['', Validators.required],
      Education_level: [null, Validators.required],
      email: ['', [Validators.required, Validators.email]],
      fb: [''],
      twitter: [''],
      address: ['', Validators.required],
      town: ['', Validators.required],
      state: ['', Validators.required],
      postal_code: [null, [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      birth_place: ['', Validators.required],
      birth_town: ['', Validators.required],
      malay_spoken: [null],
      malay_reading: [null],
      malay_writting: [null],
      eng_spoken: [null],
      eng_reading: [null],
      eng_writting: [null],
      chinees_spoken: [null],
      chinees_reading: [null],
      chinees_writting: [null],
      tamil_spoken: [null],
      tamil_reading: [null],
      tamil_writting: [null],
      economic_type: [null, Validators.required],
      employee_position: [''],
      business_type: [''],
      economic_Business_type: [''],
      income_gross: [null, [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      income_net: [null, [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      income_other: [null, Validators.pattern(/^-?(0|[1-9]\d*)?$/)],
      monthly_expense: [null, [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      adequate_income: [null, [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      health: [null, Validators.required],
      general_knowledge: [null, Validators.required],
      financial: [null, Validators.required],
      hapiness: [null, Validators.required],
      leadership: [null, Validators.required],
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
