import { Injectable } from '@angular/core';
import { ApiServiceService } from 'src/app/shared/service/api-service.service';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';

@Injectable({
  providedIn: 'root'
})
export class MembershipService {

  constructor(private apiService: ApiServiceService) { }

  public addmember(postParams){
    return this.apiService.post('registeruser', postParams);
  }

  uploadFile(file) {
    const contentType = file.type;
    const bucket = new S3(
      {
        accessKeyId: 'AKIAUPEPY7MG34S2OS5X',
        secretAccessKey: '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',
        region: 'ap-south-1'
      }
    );
    const params = {
      Bucket: 'akuc-file',
      Key: file.name,
      Body: file,
      ACL: 'public-read',
      ContentType: contentType
    };
    bucket.upload(params, function (err, data) {
      if (err) {
        console.log('There was an error uploading your file: ', err);
        return false;
      }
      console.log('Successfully uploaded file.', data);
      return true;
    });
//for upload progress
    /*bucket.upload(params).on('httpUploadProgress', function (evt) {
              console.log(evt.loaded + ' of ' + evt.total + ' Bytes');
          }).send(function (err, data) {
              if (err) {
                  console.log('There was an error uploading your file: ', err);
                  return false;
              }
              console.log('Successfully uploaded file.', data);
              return true;
          });*/
  }

  // public deletemember(postParams){
  //   return this.apiService.delete('registeruser', postParams);
  // }

  // public exportExcel(postParams){
  //   return this.apiService.post('customer/customerlistexcel', postParams);
  // }
}
