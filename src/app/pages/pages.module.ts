import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FaqComponent } from './faq/faq.component';
import { BlogComponent } from './blog/blog.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ReturnPolicyComponent } from './return-policy/return-policy.component';
import { ShippingInformationComponent } from './shipping-information/shipping-information.component';
import { FormsModule } from '@angular/forms';
import { ShopComponent } from './shop/shop.component';

@NgModule({
  declarations: [
    HomeComponent,
    CategoryComponent,
    ProductListingComponent,
    ProductDetailsComponent,
    CartComponent,
    CheckoutComponent,
    OrderConfirmationComponent,
    MyAccountComponent,
    AboutUsComponent,
    ContactUsComponent,
    FaqComponent,
    BlogComponent,
    TermsAndConditionsComponent,
    PrivacyPolicyComponent,
    ReturnPolicyComponent,
    ShippingInformationComponent,
    ShopComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    HomeComponent,
    CategoryComponent,
    ProductListingComponent,
    ProductDetailsComponent,
    CartComponent,
    CheckoutComponent,
    OrderConfirmationComponent,
    MyAccountComponent,
    AboutUsComponent,
    ContactUsComponent,
    FaqComponent,
    BlogComponent,
    TermsAndConditionsComponent,
    PrivacyPolicyComponent,
    ReturnPolicyComponent,
    ShippingInformationComponent,
  ],
})
export class PagesModule {}
