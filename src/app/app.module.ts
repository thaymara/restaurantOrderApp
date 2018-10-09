import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { OrderComponent } from './order/order.component';
import { GridResultsComponent } from './grid-results/grid-results.component';
import { OrderFormComponent } from './order/order-form/order-form.component';
import { OrderFormService } from './order/order-form/order-form.service';

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    GridResultsComponent,
    OrderFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [OrderFormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
