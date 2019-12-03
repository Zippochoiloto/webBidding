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
import { LogInComponent } from './log-in/log-in.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DemoMaterialModule } from './HomePage/home/material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarComponent } from './HomePage/car/car.component';
import { ApartmentComponent } from './HomePage/apartment/apartment.component';
import { MotorbikeComponent } from './HomePage/motorbike/motorbike.component';
import { DashboardHomeComponent } from './HomePage/dashboard-home/dashboard-home.component';
import { MatInputModule, MatDialogModule } from '@angular/material';
import { MatFormFieldModule,MatFormFieldControl} from '@angular/material/form-field';
import {CommonModule} from '@angular/common'
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SignUpComponent } from './sign-up/sign-up.component';
import {HttpClientModule} from '@angular/common/http';
import { PostsService } from './posts.service';
import { DialogConfirmDeleteComponent } from './dialog/dialog-confirm-delete/dialog-confirm-delete.component';
import { ProductListComponent } from './adminPage/product-list/product-list.component';
import { NewProductComponent } from './adminPage/new-product/new-product.component';
import { DialogEditProductComponent } from './dialog/dialog-edit-product/dialog-edit-product.component';
import { ConfirmDeleteComponent } from './dialog/confirm-delete/confirm-delete.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    AdminComponent,
    DashBoardComponent,
    UserListComponent,
    NewUserComponent,
    LogInComponent,
    PageNotFoundComponent,
    CarComponent,
    ApartmentComponent,
    MotorbikeComponent,
    DashboardHomeComponent,
    SignUpComponent,
    DialogConfirmDeleteComponent,
    ProductListComponent,
    NewProductComponent,
    DialogEditProductComponent,
    ConfirmDeleteComponent,
  
    
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
    CommonModule,
    MatCheckboxModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent],
  entryComponents: [DialogConfirmDeleteComponent,DialogEditProductComponent,ConfirmDeleteComponent],
})
export class AppModule { }
