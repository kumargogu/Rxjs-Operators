import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjaxOperatorComponent } from './rxjs/ajax-operator/ajax-operator.component';

const routes: Routes = [
  {
    path: 'ajax',
    component:AjaxOperatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
