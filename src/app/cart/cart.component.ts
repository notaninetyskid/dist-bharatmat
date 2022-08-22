import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  @ViewChild('quantity') quantity: ElementRef;

  constructor(private router: Router, private activatedRout: ActivatedRoute) { }

  ngOnInit(): void {
  }

  decreaseValue() {
    this.quantity.nativeElement.value = --this.quantity.nativeElement.value
      if(this.quantity.nativeElement.value < 0 ){
        this.quantity.nativeElement.value = 0;
      };
  }

  increaseValue() {
    this.quantity.nativeElement.value = ++this.quantity.nativeElement.value
  }

  goToShoppingCart(){
    this.router.navigate(['/Shopping-cart'], {relativeTo: this.activatedRout})
  }
}
