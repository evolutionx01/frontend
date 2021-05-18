import { Injectable } from '@angular/core';
import {ApiServiceService} from '../../shared/service/api-service.service';

@Injectable({
  providedIn: 'root'
})
export class BroadCastViewService {

  constructor(
    private apiService: ApiServiceService
  ) { }

  public getMessages(){
    return this.apiService.get('broadcast');
  }
}
