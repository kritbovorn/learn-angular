import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { FormsModule } from '@angular/forms';
import { CountingComponent } from './counting/counting.component';
import { Lab4Component } from './lab4/lab4.component';
import { HeadMenuComponent } from './headmenu/head-menu/head-menu.component';
import { NavMenuLeftComponent } from './headmenu/nav-menu-left/nav-menu-left.component';
import { NavMenuRightComponent } from './headmenu/nav-menu-right/nav-menu-right.component';
import { SearchBarComponent } from './headmenu/search-bar/search-bar.component';
import { NavCategoryComponent } from './headmenu/nav-category/nav-category.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountingComponent,
    Lab4Component,
    HeadMenuComponent,
    NavMenuLeftComponent,
    NavMenuRightComponent,
    SearchBarComponent,
    NavCategoryComponent,
    ToDoListComponent
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
