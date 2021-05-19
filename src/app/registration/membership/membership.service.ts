import { Injectable } from '@angular/core';
import { ApiServiceService } from 'src/app/shared/service/api-service.service';
import * as S3 from 'aws-sdk/clients/s3';


@Injectable({
  providedIn: 'root'
})
export class MembershipService {

  constructor(private apiService: ApiServiceService) { }

  public addmember(postParams){
    return this.apiService.post('registeruser', postParams);
  }

  public uploadFile(file){
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
      Key: 'images/' + file.name,
      Body: file,
      ACL: 'public-read',
      ContentType: contentType
    };
    return bucket.upload(params).promise();
  }

  // public deletemember(postParams){
  //   return this.apiService.delete('registeruser', postParams);
  // }

  // public exportExcel(postParams){
  //   return this.apiService.post('customer/customerlistexcel', postParams);
  // }
}
