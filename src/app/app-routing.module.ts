import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjaxOperatorComponent } from './rxjs/ajax-operator/ajax-operator.component';
import { CustomObservableComponent } from './rxjs/custom-observable/custom-observable.component';
import { EventhandlerComponent } from './rxjs/eventhandler/eventhandler.component';
import { FilterComponent } from './rxjs/filter/filter.component';
import { FromComponent } from './rxjs/from/from.component';
import { IntervalComponent } from './rxjs/interval/interval.component';
import { MapComponent } from './rxjs/map/map.component';
import { OfComponent } from './rxjs/of/of.component';
import { RangeComponent } from './rxjs/range/range.component';

const routes: Routes = [
  {
    path: 'ajax',
    component:AjaxOperatorComponent
  },
  {
    path: 'event-handler',
    component:EventhandlerComponent
  },
  {
    path: 'custom-observable',
    component:CustomObservableComponent
  },
  {
    path: 'map',
    component:MapComponent
  },
  {
    path: 'filter',
    component:FilterComponent
  },
  {
    path: 'from',
    component:FromComponent
  }
  ,
  {
    path: 'of',
    component: OfComponent
  },
  {
    path: 'range',
    component: RangeComponent
  },
  {
    path: 'interval',
    component: IntervalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
