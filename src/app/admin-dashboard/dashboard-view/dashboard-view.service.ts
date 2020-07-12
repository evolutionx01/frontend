import { Injectable } from '@angular/core';
import { ApiServiceService } from 'src/app/shared/service/api-service.service';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardViewService {

  constructor(
    private apiService: ApiServiceService
  ) { }

    public getAnalytics(){

    const memberCount =  this.apiService.get('registeruser/count');
    const consumerCount =  this.apiService.get('registerconsumer/count');

    return forkJoin([memberCount, consumerCount]);
  }
}
