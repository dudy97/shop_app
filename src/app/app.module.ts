import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './content/shopping/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './content/shopping/shopping-list-edit/shopping-list-edit.component';
import { ReceipeListComponent } from './content/receipe_book/receipes/receipe-list/receipe-list.component';
import { ReceipeItemComponent } from './content/receipe_book/receipes/receipe-item/receipe-item.component';
import { ReceipeDetailComponent } from './content/receipe_book/receipes/receipe-detail/receipe-detail.component';
import { ReceipesComponent } from './content/receipe_book/receipes/receipes.component';
import {FormsModule} from '@angular/forms';
import { DropdownDirective } from './shared/dropdown.directive';
import {ShoppingListService} from './service/shopping-list.service';
import {AppRoutingModule} from './app-routing.module';
import { SelectReceipeComponent } from './content/receipe_book/receipes/select-receipe/select-receipe.component';
import { ReceipeEditComponent } from './content/receipe_book/receipes/receipe-edit/receipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    ReceipeListComponent,
    ReceipeItemComponent,
    ReceipeDetailComponent,
    ReceipesComponent,
    DropdownDirective,
    SelectReceipeComponent,
    ReceipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
