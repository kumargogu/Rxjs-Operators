import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';

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
import { HeaderComponent } from "./header/header.component";
import { RecipesComponent } from './header/recipes/recipes.component';
import { RecipeListComponent } from './header/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './header/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './header/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './header/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './header/shopping-list/shopping-edit/shopping-edit.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { ArraydisplayPipe } from './lifecycle-hooks/arraydisplay.pipe';
import { InterceptorTestInterceptor } from './interceptor-test.interceptor';
import { CommonModule } from '@angular/common';
import { TestComponent } from './udmy/test.component';


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
    IntervalComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
        LifecycleHooksComponent,
    TestComponent,
    ArraydisplayPipe
    ],
    providers: [ArraydisplayPipe,
        { provide:HTTP_INTERCEPTORS,useClass:InterceptorTestInterceptor,multi:true }],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
      
       

       
    ]
})
export class AppModule { }
