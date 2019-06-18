import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../product.service';
import { setTNodeAndViewData } from '@angular/core/src/render3/state';
import { Observable, timer } from 'rxjs';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  nbOfRandomItems: number;
  products = new Array<Product>();
  timer = timer(0, 3000);
  constructor(private productService: ProductService) {
    this.nbOfRandomItems = 3;
    this.timer.subscribe(tick => {
      this.productService.getRandomProducts$(this.nbOfRandomItems).subscribe(resp => {
        this.products = resp;
        console.log("CALLED after 3 sec")
      });
   });
    
   }


  ngOnInit() {
  }

}
