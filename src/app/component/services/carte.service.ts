import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarteService {
public cardItemList : any =[]
public productList = new BehaviorSubject<any>([]);
  constructor() { }
}
