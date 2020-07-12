import { Injectable } from '@angular/core';
import { ApiServiceService } from 'src/app/shared/service/api-service.service';

@Injectable({
  providedIn: 'root'
})
export class ConsumerDetailsService {

  constructor(
    private apiService: ApiServiceService
  ) { }

  public getConsumers(){
    return this.apiService.get('registerconsumer');
  }
}
