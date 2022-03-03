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
 searchKey:string ="";
  public filterCategory : any ;
  constructor(private api : ApiService, private carteService : CarteService) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.productList = res;
      this.filterCategory = res ;
      this.productList.forEach((a :any )=> {
        if(a.category==="women's clothing" || a.category==="men's clothing") {
          a.category = "fashion";
        }
        Object.assign(a,{quantity:1,total:a.price});
        
      });
      console.log(this.productList);

    });
    this.carteService.search.subscribe((val:any) => {
      this.searchKey = val;
    })
  }
  addtocarte(item :any) {
    this.carteService.addtoCarte(item);
     

  }
  filter(category:string) {
    this.filterCategory = this.productList
    .filter((a:any)=> {
      if(a.category == category || category=='') {
        return a;
      }
    })
  }

}
