import { Component, OnInit, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-our-products',
  templateUrl: './our-products.component.html',
  styleUrls: ['./our-products.component.css']
})
export class OurProductsComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {

  }

}
