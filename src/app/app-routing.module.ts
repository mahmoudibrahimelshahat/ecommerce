import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LatestComponent } from './views/latest/latest.component';
import { CatigoryComponent } from './views/catigory/catigory.component';
import { ProductlistComponent } from './views/latest/productlist/productlist.component';
import { ProductdetailsComponent } from './views/latest/productdetails/productdetails.component';
import { BlogComponent } from './views/blog/blog.component';
import { BlogdetailsComponent } from './views/blog/blogdetails/blogdetails.component';
import { LoginComponent } from './views/pages/login/login.component';
import { PagesComponent } from './views/pages/pages.component';
import { CardComponent } from './views/pages/card/card.component';
import { AboutComponent } from './views/pages/about/about.component';
import { ConfirmationComponent } from './views/pages/confirmation/confirmation.component';
import { CheckoutComponent } from './views/pages/checkout/checkout.component';
import { ContactComponent } from './views/contact/contact.component';





const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "Catigory",
    component: CatigoryComponent
  },
  {
    path: "latest",
    children: [
      {
        path: "productdetails",
        component: ProductdetailsComponent
      },
      {
        path: ":productlist",
        component: ProductlistComponent
      },
      {
        path: '',
        component: LatestComponent
      }
    ]
  },
  {
    path: "blog",
    children: [
      {
        path: "blogdetails",
        component: BlogdetailsComponent
      },
      {
        path: '',
        component: BlogComponent
      }
    ]
  },
  {
    path: "pages",
    children: [
      {
        path: "Login",
        component: LoginComponent
      },
      { 
        path: "Card",
        component: CardComponent
      },
      { 
        path: "About",
        component: AboutComponent
      },
      {
        path: "confirmation",
        component: ConfirmationComponent
      },
      {
        path: "Checkout",
        component: CheckoutComponent
      },
      {
        path: '',
        component: PagesComponent
      }
    ]
  },
  {
    path: "Contact",
    component: ContactComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
