import { Injectable } from '@angular/core';
import { ApiServiceService } from 'src/app/shared/service/api-service.service';

@Injectable({
  providedIn: 'root'
})
export class AdminSignInService {

  constructor(private apiService: ApiServiceService) { }

  public loginAdmin(postParams){
    return this.apiService.post('auth', postParams);
  }
}
