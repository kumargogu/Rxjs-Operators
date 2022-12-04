import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjaxOperatorComponent } from './rxjs/ajax-operator/ajax-operator.component';
import { EventhandlerComponent } from './rxjs/eventhandler/eventhandler.component';
import { CustomObservableComponent } from './rxjs/custom-observable/custom-observable.component';
import { MapComponent } from './rxjs/map/map.component';
import { FilterComponent } from './rxjs/filter/filter.component';
import { FromComponent } from './rxjs/from/from.component';
import { OfComponent } from './rxjs/of/of.component';
import { RangeComponent } from './rxjs/range/range.component';
import { IntervalComponent } from './rxjs/interval/interval.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AjaxOperatorComponent,
    EventhandlerComponent,
    CustomObservableComponent,
    MapComponent,
    FilterComponent,
    FromComponent,
    OfComponent,
    RangeComponent,
    IntervalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
