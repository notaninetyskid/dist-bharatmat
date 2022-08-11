import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/product.modal';
import { productService } from 'src/app/services/product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Products[];
  constructor(private productService: productService) { }

  ngOnInit() {
    this.productService.productList.subscribe(products => {
      this.products = products;
      for (let product of products) {
        product.discount ? product.price = product.priceWithOutDiscount * product.discount / 100 : product.price;
        console.log(product.priceWithOutDiscount);
      }
    })
    this.productService.getProducts();
  }

}
