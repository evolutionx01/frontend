import {Component, OnInit, ViewChild} from '@angular/core';
import {BroadcastViewService} from './broadcast-view.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-broadcast-view',
  templateUrl: './broadcast-view.component.html',
  styleUrls: ['./broadcast-view.component.scss']
})
export class BroadcastViewComponent implements OnInit {
  @ViewChild('confirmation') private confirmation;
  selectedFiles: FileList;
  fileUploadData: any;
  fileUploadType: string;
  addMessageForm: FormGroup;
  constructor(
    private spinner: NgxSpinnerService,
    private broadcastService: BroadcastViewService,
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
    this.buildAddMessageForm();
  }

  public buildAddMessageForm(){
    this.addMessageForm = this.formBuilder.group({
      name: ['', Validators.required],
      message: [''],
      file: [''],
      file_type: ['']
    });
  }

  public addMessage() {
    this.addMessageForm.patchValue({
      file: this.fileUploadData ? this.fileUploadData?.Location : '',
      file_type: this.fileUploadType ? this.fileUploadType : ''
    });
    console.log(this.addMessageForm.value);
    this.spinner.show();
    this.broadcastService.addMessage(this.addMessageForm.value).subscribe(
      data => {
        this.broadcastMessage(data);
      },
      error => {
        this.spinner.hide();
        console.log(error);
      }
    );
  }

  private broadcastMessage(data) {
    this.spinner.hide();
    console.log(data);
    if (data.success){
      this.openConfirmationModal(this.confirmation);
    }
  }

  openConfirmationModal(confirmation){
    this.modalService.open(confirmation);
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles);
  }

  upload() {
    const file = this.selectedFiles.item(0);
    const fileType = file.type.split('/');
    this.fileUploadType = fileType[0];
    console.log(this.fileUploadType)
    this.spinner.show();
    this.broadcastService.uploadFile(file).then( result => {
      console.log('Upload finished', result);
      this.spinner.hide();
      this.fileUploadData = result;
    })
    .catch(error => {
      this.spinner.hide();
      console.log('Something went wrong');
    });
  }

  redirectToReg(){
    this.modalService.dismissAll();
    this.addMessageForm.reset();
  }
}
