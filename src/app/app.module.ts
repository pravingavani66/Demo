import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { ifNullOrEmptyPipe } from './pipes/if-null-or-empty.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ProductListComponent,
    ifNullOrEmptyPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ProductListComponent]
})
export class AppModule { }
