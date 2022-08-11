import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Products } from "../models/product.modal";

@Injectable({ providedIn: 'root' })


export class productService {
  productList = new Subject<Products[]>();
  private products: Products[] = [
    new Products(
    'assets/images/product_image/Rectangle_434_(1).png',
    'Cow-mat',
    'Get iit by tomorrow, July 20',
    20,
    1500
    ),
    new Products(
    'assets/images/product_image/Rectangle_434.png',
    'Cow-mat',
    'Get iit by tomorrow, July 20',
    null,
    null,
    500
    ),
    new Products(
    'assets/images/product_image/Rectangle_434_(1).png',
    'Cow-mat',
    'Get iit by tomorrow, July 20'
    ),
    new Products(
    'assets/images/product_image/Rectangle_434.png',
    'Cow-mat',
    'Get iit by tomorrow, July 20'
    ),
    new Products(
    'assets/images/product_image/Rectangle_434_(1).png',
    'Cow-mat',
    'Get iit by tomorrow, July 20'
    ),

  ];
   getProducts() {
    this.productList.next(this.products);
    return this.products.slice();
  }

}
