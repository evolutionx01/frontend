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
    country: 'Country: (Foreigner)',
    passport_no: 'Passport No',
    mobile: 'Mobile No.',
    whatsapp: 'No. WhatsApp, No. (Home/ Office)',
    email: 'Email',
    address: 'Current residential address',
    town: 'Town',
    state: 'State',
    postal_code: 'Postcode',
    preffered_communication: 'Preferred communication',
    profession: 'Profession',
    income_net: 'Nett income per month',
  };

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
        country: 'Country: (Foreigner)',
        passport_no: 'Passport No',
        mobile: 'Mobile No.',
        whatsapp: 'No. WhatsApp, No. (Home/ Office)',
        email: 'Email',
        address: 'Current residential address',
        town: 'Town',
        state: 'State',
        postal_code: 'Postcode',
        preffered_communication: 'Preferred communication',
        profession: 'Profession',
        income_net: 'Nett income per month',
      };
    }else if (newValue === 'ma'){
      this.modalHeader = 'PERMINTAAN UNTUK MENGKAPSULKAN REMPAH';
      this.modalContent = '<p>dengan ini membuat permintaan kepada AK Universal Healthcare melalui AK Universal Concept, untuk mengkapsulkan rempah, supaya mudah ditelan dan untuk kegunaan peribadi saya sahaja.</p><p>Sebagai pengguna AK Universal Concept, saya membuat permintaan ini atas kehendak saya sendiri dan tidak akan bertanggungjawabkan AK Universal Concept atau AK Universal Healthcare ke atas apa-apa perkara sekalipun, sekiranya ia timbul, selepas proses pengkapsulan</p>';
      this.title = 'BORANG PERMOHONAN PENGGUNA';
      this.fieldLabelen = {
        name: 'Nama (seperti di kad pengenalan)',
        NRIC_no: 'No.Kad Pengenalan',
        marital_status: 'Status perkahwinan',
        gender: 'Jantina',
        status: 'Taraf',
        race: 'Bangsa',
        country: 'Country: (Warga asing)',
        passport_no: 'No.Paspot',
        mobile: 'No.Telefon bimbit',
        whatsapp: 'No. WhatsApp, Alternatif (Rumah/Pejabat)',
        email: 'Emel',
        address: 'Alamat kediaman kini',
        town: 'Bandar',
        state: 'Negeri',
        postal_code: 'Poskod',
        preffered_communication: 'Cara berkomunikasi',
        profession: 'Jawatan',
        income_net: 'Pendapatan bersih sebulan',
      };
    }else if (newValue === 'ch'){
      this.modalHeader = 'REQUEST FOR ENCAPSULATION OF SPICES';
      this.modalContent = '<p>hereby make a request to AK Universal Healthcare, through AK Universal Concept, to encapsulate the spices for my easy consumption and personal use only.</p><p>As a consumer of AK Universal Concept, I am therefore making the above request on my own free will and will  not hold AK Universal Concept or AK Universal Healthcare liable on any matters whatsoever, should it arise, after  the encapsulation process.</p>';
      this.title = 'BORANG PERMOHONAN PENGGUNA';
      this.fieldLabelen = {
        name: 'Nameeee (as in NRIC)',
        NRIC_no: 'NRIC No',
        marital_status: 'Marital status',
        gender: 'Gender',
        status: 'Status',
        race: 'Race',
        country: 'Country: (Foreigner)',
        passport_no: 'Passport No',
        mobile: 'Mobile No.',
        whatsapp: 'No. WhatsApp, No. (Home/ Office)',
        email: 'Email',
        address: 'Current residential address',
        town: 'Town',
        state: 'State',
        postal_code: 'Postcode',
        preffered_communication: 'Preferred communication',
        profession: 'Profession',
        income_net: 'Nett income per month',
      };
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
        spices: [null]
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
