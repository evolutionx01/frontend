import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

    constructor() { }
    private toggle = new Subject<any>();
    public $toggleObservable = this.toggle.asObservable();

    toggleClicked(status: boolean){
        this.toggle.next(status);
    }

}