import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { BecomeADealerComponent } from './become-a-dealer/become-a-dealer.component';
import { FAQComponent } from './faq/faq.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsOfServicesComponent } from './terms-of-services/terms-of-services.component';
import { ReturnRefundAndCancellationPolicyComponent } from './return-refund-and-cancellation-policy/return-refund-and-cancellation-policy.component';
import { appRoutingModule } from './app-routing-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OurProductsComponent } from './our-products/our-products.component';
import { ProductsFilterComponent } from './our-products/products-filter/products-filter.component';
import { ProductListComponent } from './our-products/product-list/product-list.component';
import { ProductPageComponent } from './our-products/product-list/product-page/product-page.component';
import { HomeSectionSevenComponent } from './home/home-section-seven/home-section-seven.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    HomeComponent,
    ContactUsComponent,
    TestimonialsComponent,
    BecomeADealerComponent,
    FAQComponent,
    DisclaimerComponent,
    PrivacyPolicyComponent,
    TermsOfServicesComponent,
    ReturnRefundAndCancellationPolicyComponent,
    OurProductsComponent,
    ProductsFilterComponent,
    ProductListComponent,
    ProductPageComponent,
    HomeSectionSevenComponent

  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
