import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConsumerService } from './consumer.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.scss']
})
export class ConsumerComponent implements OnInit {

  @ViewChild('confirmation') private confirmation;
  consumerForm: FormGroup;
  public selectedLanguage = 'en';
  public title = 'CONSUMER APPLICATION FORM';
  public modalHeader = 'REQUEST FOR ENCAPSULATION OF SPICES';
  public modalContent = '<p>hereby make a request to AK Universal Healthcare, through AK Universal Concept, to encapsulate the spices for my easy consumption and personal use only.</p><p>As a consumer of AK Universal Concept, I am therefore making the above request on my own free will and will  not hold AK Universal Concept or AK Universal Healthcare liable on any matters whatsoever, should it arise, after  the encapsulation process.</p>';
  public fieldLabelen = {
    name: 'Name (as in NRIC)',
    NRIC_no: 'NRIC No',
    marital_status: 'Marital status',
    gender: 'Gender',
    status: 'Status',
    race: 'Race',
    country: 'Country (For Foreigner)',
    passport_no: 'Passport No (For Foreigner)',
    mobile: 'Mobile No.',
    whatsapp: 'WhatsApp No, Alternative (Home/ Office)',
    email: 'Email',
    address: 'Current residential address',
    town: 'Town',
    state: 'State',
    postal_code: 'Postcode',
    preffered_communication: 'Preferred communication',
    type_of_buusiness: 'Type of Business (If do Business)',
    profession: 'Profession',
    income_net: 'Nett income per month',
    accept: 'Accepting the encapsulation of spices'
  };


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

  public preferredOption = [
    {text: 'Mail', value: 'mail'},
    {text: 'Email', value: 'email'},
    {text: 'SMS', value: 'sms'},
    {text: 'Telephone', value: 'tel'},
    {text: 'WhatsApp', value: 'wa'},
  ];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private conService: ConsumerService,
    config: NgbModalConfig,
    private modalService: NgbModal,
    private spinner: NgxSpinnerService
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
    config.centered = true;
    config.size = 'l';
   }

  ngOnInit(): void {
    this.buildConsumerForm();
  }
  onChange(newValue) {
    console.log(newValue);
    this.selectedLanguage = newValue;
    if (newValue === 'en'){
      this.modalHeader = 'REQUEST FOR ENCAPSULATION OF SPICES';
      this.modalContent = '<p>hereby make a request to AK Universal Healthcare, through AK Universal Concept, to encapsulate the spices for my easy consumption and personal use only.</p><p>As a consumer of AK Universal Concept, I am therefore making the above request on my own free will and will  not hold AK Universal Concept or AK Universal Healthcare liable on any matters whatsoever, should it arise, after  the encapsulation process.</p>';
      this.title = 'CONSUMER APPLICATION FORM';
      this.fieldLabelen = {
        name: 'Name (as in NRIC)',
        NRIC_no: 'NRIC No',
        marital_status: 'Marital status',
        gender: 'Gender',
        status: 'Status',
        race: 'Race',
        country: 'Country (For Foreigner)',
        passport_no: 'Passport No (For Foreigner)',
        mobile: 'Mobile No.',
        whatsapp: 'WhatsApp No, Alternative (Home/ Office)',
        email: 'Email',
        address: 'Current residential address',
        town: 'Town',
        state: 'State',
        postal_code: 'Postcode',
        preffered_communication: 'Preferred communication',
        type_of_buusiness: 'Type of Business (If do Business)',
        profession: 'Profession',
        income_net: 'Nett income per month',
        accept: 'Accepting the encapsulation of spices'
      };
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
      this.preferredOption = [
        {text: 'Mail', value: 'mail'},
        {text: 'Email', value: 'email'},
        {text: 'SMS', value: 'sms'},
        {text: 'Telephone', value: 'tel'},
        {text: 'WhatsApp', value: 'wa'},
      ];
    }else if (newValue === 'ma'){
      this.modalHeader = 'PERMINTAAN UNTUK MENGKAPSULKAN REMPAH / REQUEST FOR ENCAPSULATION OF SPICES';
      this.modalContent = '<p>Dengan ini saya membuat permintaan kepada AK Universal Healthcare melalui AK Universal Concept untuk mengkapsulkan rempah supaya mudah ditelan dan untuk kegunaan peribadi saya sahaja.</p><p>Sebagai pengguna AK Universal Concept, saya membuat permintaan ini atas kehendak saya sendiri dan tidak akan mempertanggungjawabkan AK Universal Concept atau AK Universal Healthcare ke atas apa-apa perkara sekalipun, sekiranya ia menimbul selepas proses pengkapsulan.</p>';
      this.title = 'BORANG PERMOHONAN PENGGUNA / CONSUMER APPLICATION FORM';
      this.fieldLabelen = {
        name: 'Nama (Seperti di Kad Pengenalan) / Name (as in NRIC)',
        NRIC_no: 'No. Kad Pengenalan / NRIC No',
        marital_status: 'Taraf Perkahwinan / Marital status',
        gender: 'Jantina / Gender',
        status: 'Taraf / Status',
        race: 'Bangsa / Race',
        country: 'Negara (Untuk Warga Asing) / Country (For Foreigner)',
        passport_no: 'No. Pasport (Untuk Warga Asing) / Passport No (For Foreigner)',
        mobile: 'No. Telefon Bimbit / Mobile No.',
        whatsapp: 'No. WhatsApp, Alternatif (Rumah/ Pejabat) / WhatsApp No, Alternative (Home/ Office)',
        email: 'E-mel / Email',
        address: 'Alamat Rumah Terkini / Current residential address',
        town: 'Bandar / Town',
        state: 'Negeri / State',
        postal_code: 'Poskod / Postcode',
        preffered_communication: 'Cara Berkomunikasi / Preferred communication',
        type_of_buusiness: 'Jenis Perniagaan (Jika Berniaga) / Type of Business (If do Business)',
        profession: 'Jawatan / Profession',
        income_net: 'Pendapatan Bersih Sebulan / Nett income per month',
        accept: 'Setuju menerima pengkapsulan rempah / Accepting the encapsulation of spices'
      };
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
      this.preferredOption = [
        {text: 'Surat / Mail', value: 'mail'},
        {text: 'E-mel / Email', value: 'email'},
        {text: 'Khidmat Pesanan Ringkas / SMS', value: 'sms'},
        {text: 'Telefon / Telephone', value: 'tel'},
        {text: 'WhatsApp', value: 'wa'},
      ];
    }else     if (newValue === 'ch'){
      this.modalHeader = '请求将香料胶囊化 / REQUEST FOR ENCAPSULATION OF SPICES';
      this.modalContent = '<p>因个人需求，本人在此要求 AK Universal Healthcare 将香料压缩至胶囊内以便容易食用。本人在此申明，此要求纯属个人意愿。</p><p>如有任何后续问题，AK Universal Healthcare 将无需附上任何责任。</p><p>hereby make a request to AK Universal Healthcare, through AK Universal Concept, to encapsulate the spices for my easy consumption and personal use only.</p><p>As a consumer of AK Universal Concept, I am therefore making the above request on my own free will and will  not hold AK Universal Concept or AK Universal Healthcare liable on any matters whatsoever, should it arise, after  the encapsulation process.</p>';
      this.title = '消費者 應用 形成 / CONSUMER APPLICATION FORM';
      this.fieldLabelen = {
        name: '名字 (身份证) / Name (as in NRIC)',
        NRIC_no: '身份证号码 / NRIC No',
        marital_status: '婚姻状况 / Marital status',
        gender: '性别 / Gender',
        status: '状态 / Status',
        race: '种族 / Race',
        country: '国家（外国人专用） / Country (For Foreigner)',
        passport_no: '护照号码 （外国人专用） / Passport No (For Foreigner)',
        mobile: '手机号码 / Mobile No.',
        whatsapp: 'WhatsApp号码，其他 （居家/公司） / WhatsApp No, Alternative (Home/ Office)',
        email: '电邮 / Email',
        address: '当前居住地址 / Current residential address',
        town: '城市 / Town',
        state: '州 / State',
        postal_code: '邮政编码 / Postcode',
        preffered_communication: '首选沟通 / Preferred communication',
        type_of_buusiness: '生意类型（如果做生意） / Type of Business (If do Business)',
        profession: '职业 / Profession',
        income_net: '每月净收入 / Nett income per month',
        accept: '接受香料胶囊化 / Accepting the encapsulation of spices'
      };
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
      this.preferredOption = [
        {text: '邮件 / Mail', value: 'mail'},
        {text: '电邮 / Email', value: 'email'},
        {text: '短信 / SMS', value: 'sms'},
        {text: '电话 / Telephone', value: 'tel'},
        {text: 'WhatsApp', value: 'wa'},
      ];
    }
      // ... do other stuff here ...
  }


    public buildConsumerForm(){
      this.consumerForm = this.formBuilder.group({
        name: ['', Validators.required],
        NRIC_no: [null, [Validators.required, Validators.pattern('^[0-9]*$')]],
        marital_status: ['', Validators.required],
        gender: ['', Validators.required],
        status: ['', Validators.required],
        race: ['', Validators.required],
        country: [''],
        passport_no: [null],
        mobile: [null, [Validators.required, Validators.pattern('^[0-9]*$')]],
        whatsapp: [null, [Validators.required, Validators.pattern('^[0-9]*$')]],
        email: ['', Validators.email],
        address: ['', Validators.required],
        town: ['', Validators.required],
        state: ['', Validators.required],
        postal_code: [null, Validators.required],
        preffered_communication: ['', Validators.required],
        profession: ['', Validators.required],
        income_net: [null, Validators.required],
        spices: [null],
        type_of_buusiness: ['']
      });
  }

     // convenience getter for easy access to form fields
   get f() { return this.consumerForm.controls; }

   public addConsumer() {
    console.log(this.consumerForm.value);
    this.spinner.show();
    this.conService.addConsumer(this.consumerForm.value).subscribe(
      data => {
        this.consumerDetails(data);
      },
      error => {
        this.spinner.hide();
        console.log(error);
      }
    );
  }

  private consumerDetails(data) {
    this.spinner.hide();
    console.log(data);
    if (data.success){
      this.openConfirmationModal(this.confirmation);
    }
  }

  redirectToReg(){
    this.modalService.dismissAll();
    this.router.navigate(['/register']);

  }

   onReset(){
    this.consumerForm.reset();
  }

  openConfirmationModal(confirmation){
    this.modalService.open(confirmation);
  }

  openModal(content){
    this.modalService.open(content);
  }

}
