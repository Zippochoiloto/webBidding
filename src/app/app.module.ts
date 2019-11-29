import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './HomePage/about/about.component';
import { HomeComponent } from './HomePage/home/home.component';
import { AdminComponent } from './adminPage/admin/admin.component';
import { DashBoardComponent } from './adminPage/dash-board/dash-board.component';
import { UserListComponent } from './adminPage/user-list/user-list.component';
import { NewUserComponent } from './adminPage/new-user/new-user.component';
import { EditUserComponent } from './adminPage/edit-user/edit-user.component';
import { LogInComponent } from './log-in/log-in.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DemoMaterialModule } from './HomePage/home/material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarComponent } from './HomePage/car/car.component';
import { ApartmentComponent } from './HomePage/apartment/apartment.component';
import { MotorbikeComponent } from './HomePage/motorbike/motorbike.component';
import { DashboardHomeComponent } from './HomePage/dashboard-home/dashboard-home.component';
import { MatInputModule } from '@angular/material';
import { MatFormFieldModule,MatFormFieldControl} from '@angular/material/form-field';
// import { Router } from '@angular/router';



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
    CarComponent,
    ApartmentComponent,
    MotorbikeComponent,
    DashboardHomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
