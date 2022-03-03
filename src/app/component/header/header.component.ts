import { Component, OnInit } from '@angular/core';
import { CarteService } from '../services/carte.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
public totalItem : number =0;
public searchTerm: string ='';
  constructor(private CarteService : CarteService) { }

  ngOnInit(): void {
    this.CarteService.getProduct()
    .subscribe(res=> {
      this.totalItem =res.length;
    })
  }
  search(event:any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.CarteService.search.next(this.searchTerm);

  }

}
