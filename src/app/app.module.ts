import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './adminPage/admin/admin.component';
import { DashBoardComponent } from './adminPage/dash-board/dash-board.component';
import { UserListComponent } from './adminPage/user-list/user-list.component';
import { NewUserComponent } from './adminPage/new-user/new-user.component';
import { EditUserComponent } from './adminPage/edit-user/edit-user.component';
import { LogInComponent } from './log-in/log-in.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DemoMaterialModule } from './home/material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    AdminComponent,
    DashBoardComponent,
    UserListComponent,
    NewUserComponent,
    EditUserComponent,
    LogInComponent,
    PageNotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
