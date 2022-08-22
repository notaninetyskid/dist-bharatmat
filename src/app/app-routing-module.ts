import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutUsComponent } from "./about-us/about-us.component";
import { BecomeADealerComponent } from "./become-a-dealer/become-a-dealer.component";
import { CartComponent } from "./cart/cart.component";
import { ShoppingCartComponent } from "./cart/shopping-cart/shopping-cart.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { DisclaimerComponent } from "./disclaimer/disclaimer.component";
import { FAQComponent } from "./faq/faq.component";
import { LogInComponent } from "./header/log-in/log-in.component";
import { HomeComponent } from "./home/home.component";
import { OurProductsComponent } from "./our-products/our-products.component";
import { ProductPageComponent } from "./our-products/product-list/product-page/product-page.component";
import { PrivacyPolicyComponent } from "./privacy-policy/privacy-policy.component";
import { ReturnRefundAndCancellationPolicyComponent } from "./return-refund-and-cancellation-policy/return-refund-and-cancellation-policy.component";
import { TermsOfServicesComponent } from "./terms-of-services/terms-of-services.component";
import { TestimonialsComponent } from "./testimonials/testimonials.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'testimonials',
    component: TestimonialsComponent
  },
  {
    path: 'become-a-dealer',
    component: BecomeADealerComponent
  },
  {
    path: 'FAQ',
    component: FAQComponent
  },
  {
    path: 'diclaimer',
    component: DisclaimerComponent
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent
  },
  {
    path: 'terms-of-services',
    component: TermsOfServicesComponent
  },
  {
    path: 'return-refund-and-cancellation-policy',
    component: ReturnRefundAndCancellationPolicyComponent
  },
  {
    path: 'our-products',
    component: OurProductsComponent
  },
  {
    path: 'product-page',
    component: ProductPageComponent
  },
  {
    path: 'cart-component',
    component: CartComponent,
  },
  {
    path: 'Shopping-cart',
    component: ShoppingCartComponent
  },
  {
    path: 'logIn-modal',
    component: LogInComponent
  }


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class appRoutingModule { }
