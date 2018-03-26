import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ConvertToSpace } from './shared/convert-to-space.pipe';
import { StarComponent } from './shared/star.component';
import { ProductService } from './product/product.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './product/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductGaurdService } from './product/product-gaurd.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpace,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'products', component: ProductListComponent},
      {path: 'products/:id',
      canActivate: [ProductGaurdService]
      , component: ProductDetailComponent},
      {path: 'welcome', component: WelcomeComponent, pathMatch: 'full'},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ])
  ],
  providers: [ProductService, ProductGaurdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
