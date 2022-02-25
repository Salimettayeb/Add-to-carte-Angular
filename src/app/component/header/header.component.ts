import { Component, OnInit } from '@angular/core';
import { CarteService } from '../services/carte.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
public totalItem : number =0;
  constructor(private CarteService : CarteService) { }

  ngOnInit(): void {
    this.CarteService.getProduct()
    .subscribe(res=> {
      this.totalItem =res.length;
    })
  }

}
