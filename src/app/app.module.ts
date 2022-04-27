import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './views/home/home.component';
import { CatigoryComponent } from './views/catigory/catigory.component';
import {RatingModule} from 'primeng/rating';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import {MatSelectModule} from '@angular/material/select';
import { LatestComponent } from './views/latest/latest.component';
import { ProductlistComponent } from './views/latest/productlist/productlist.component';
import { ProductdetailsComponent } from './views/latest/productdetails/productdetails.component';
import { BlogComponent } from './views/blog/blog.component';
import { BlogdetailsComponent } from './views/blog/blogdetails/blogdetails.component';
import { PagesComponent } from './views/pages/pages.component';
import { LoginComponent } from './views/pages/login/login.component';
import { CardComponent } from './views/pages/card/card.component';
import { AboutComponent } from './views/pages/about/about.component';
import { ConfirmationComponent } from './views/pages/confirmation/confirmation.component';
import { CheckoutComponent } from './views/pages/checkout/checkout.component';
import { ContactComponent } from './views/contact/contact.component';
import { CursorComponent } from './views/latest/cursor/cursor.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CatigoryComponent,
    LatestComponent,
    ProductlistComponent,
    ProductdetailsComponent,
    BlogComponent,
    BlogdetailsComponent,
    PagesComponent,
    LoginComponent,
    CardComponent,
    AboutComponent,
    ConfirmationComponent,
    CheckoutComponent,
    ContactComponent,
    CursorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RatingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    CarouselModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
