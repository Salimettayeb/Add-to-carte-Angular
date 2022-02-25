import { Component, OnInit } from '@angular/core';
import { CarteService } from '../services/carte.service';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {

  public products : any = [];
  public grandTotal !: number ;

  constructor(private carteService : CarteService) { }
  ngOnInit(): void {
  
    this.carteService.getProduct()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.carteService.getTotalPrice();
    })
  }
  removeItem(item : any) {
    this.carteService.removeCarteItem(item);
  }
  emptycarte() {
    this.carteService.removeAllcartes();
    
  }

}
