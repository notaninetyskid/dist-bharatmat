import {
   Component,
   ComponentFactoryResolver,
   ElementRef,
   OnInit,
   Renderer2,
   ViewChild
   } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private renderer: Renderer2, private router: Router, private activatedRoute: ActivatedRoute, private componentFactoryResolver: ComponentFactoryResolver) { }

  @ViewChild('quantityOfProduct') quantityOfProduct: ElementRef;


  ngOnInit() {
    const javaScriptForHeadAndFoot = this.renderer.createElement('script');
    javaScriptForHeadAndFoot.src = `../../assets/javaScripts/headerAndFooter.js`;
    this.renderer.appendChild(document.head, javaScriptForHeadAndFoot);
// stylesheets

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

  NavToCartPage() {
    this.router.navigate(['/cart-component'],{relativeTo: this.activatedRoute})
  }

  openLogInModal() {
    // const LogInModal = this.componentFactoryResolver.resolveComponentFactory(
    //   LogInComponent
    // );
    this.router.navigate(['/logIn-modal'], {relativeTo: this.activatedRoute});
  }
}
