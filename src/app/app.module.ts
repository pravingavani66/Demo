import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { ifNullOrEmptyPipe } from './pipes/if-null-or-empty.pipe';
import { customDatePipe } from './pipes/custom-date.pipe';
import { CustomCheckNullOrEmptyPipe } from './pipes/custom-check-nuu-or-empty.pipe';
import { LowerCasePipe } from '@angular/common';
import { SearchProductPipe } from './pipes/search-product.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ProductListComponent,
    ifNullOrEmptyPipe,
    customDatePipe,
    CustomCheckNullOrEmptyPipe,
    SearchProductPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LowerCasePipe],
  bootstrap: [ProductListComponent]
})
export class AppModule { }
