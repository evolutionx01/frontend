import { Injectable } from '@angular/core';
import { ApiServiceService } from 'src/app/shared/service/api-service.service';

@Injectable({
  providedIn: 'root'
})
export class MemberDetailsService {

  constructor(
    private apiService: ApiServiceService
  ) { }

  public getMembers(){
    return this.apiService.get('registeruser');
  }
}
