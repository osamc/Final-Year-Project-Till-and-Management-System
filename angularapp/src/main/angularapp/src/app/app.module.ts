import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationStrategy, HashLocationStrategy, FormStyle } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DefinitionComponent } from './definition/definition.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';
import { ApiModule } from './openapi';
import { HttpClientModule } from '@angular/common/http';
import {ProductListComponent} from './product-components/product-list/product-list.component';
import { ProductComponent } from './product-components/product/product.component';
import { PagelistComponent } from './page-components/pagelist/pagelist.component';
import { PageComponent } from './page-components/page/page.component';
import { SellerlistComponent } from './seller-components/sellerlist/sellerlist.component';
import { SellerComponent } from './seller-components/seller/seller.component';
import { ToasterComponent } from './toaster/toaster.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DefinitionComponent,
    ProductListComponent,
    ProductComponent,
    PagelistComponent,
    PageComponent,
    SellerlistComponent,
    SellerComponent,
    ToasterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    RouterModule,
    ApiModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbPopoverModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
