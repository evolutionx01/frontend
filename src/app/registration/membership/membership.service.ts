import { Injectable } from '@angular/core';
import { ApiServiceService } from 'src/app/shared/service/api-service.service';

@Injectable({
  providedIn: 'root'
})
export class MembershipService {

  constructor(private apiService: ApiServiceService) { }

  public addmember(postParams){
    return this.apiService.post('registeruser', postParams);
  }

  // public deletemember(postParams){
  //   return this.apiService.delete('registeruser', postParams);
  // }

  // public exportExcel(postParams){
  //   return this.apiService.post('customer/customerlistexcel', postParams);
  // }
}
