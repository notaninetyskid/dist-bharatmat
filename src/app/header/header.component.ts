import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  @ViewChild('quantityOfProduct') quantityOfProduct: ElementRef;


  ngOnInit() {


    const javaScriptForHeadAndFoot = this.renderer.createElement('script');
    javaScriptForHeadAndFoot.src = `../../assets/javaScripts/headerAndFooter.js`;
    this.renderer.appendChild(document.head, javaScriptForHeadAndFoot);

  }

  increase() {
    this.quantityOfProduct.nativeElement.value = ++this.quantityOfProduct.nativeElement.value;
  }
  decrease() {
    this.quantityOfProduct.nativeElement.value = --this.quantityOfProduct.nativeElement.value
    if(this.quantityOfProduct.nativeElement.value < 0 ){
      this.quantityOfProduct.nativeElement.value = 0;
    };
  }
}
