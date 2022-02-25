import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CarteService } from '../services/carte.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 public productList : any ;

  constructor(private api : ApiService, private carteService : CarteService) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.productList = res;
      this.productList.forEach((a :any )=> {
        Object.assign(a,{quantity:1,total:a.price});
        
      });

    })
  }
  addtocarte(item :any) {
    this.carteService.addtoCarte(item);
     

  }

}
