import { Injectable } from '@angular/core';
import { ApiServiceService } from 'src/app/shared/service/api-service.service';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {

  constructor(private apiService: ApiServiceService) { }

  public addConsumer(postParams){
    return this.apiService.post('registerconsumer', postParams);
  }
}
