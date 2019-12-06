import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AboutComponent } from './HomePage/about/about.component';
import { HomeComponent } from './HomePage/home/home.component';
import { AdminComponent } from './adminPage/admin/admin.component';
import { DashBoardComponent } from './adminPage/dash-board/dash-board.component';
import { UserListComponent } from './adminPage/user-list/user-list.component';
import { NewUserComponent } from './adminPage/new-user/new-user.component';
import { LogInComponent } from './Pages/log-in/log-in.component';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';
import { ApartmentComponent } from './HomePage/apartment/apartment.component';
import { MotorbikeComponent } from './HomePage/motorbike/motorbike.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardHomeComponent } from './HomePage/dashboard-home/dashboard-home.component';

import { DemoMaterialModule } from './HomePage/home/material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarComponent } from './HomePage/car/car.component';

import { MatInputModule, MatDialogModule } from '@angular/material';
import { MatFormFieldModule,MatFormFieldControl} from '@angular/material/form-field';
import {CommonModule} from '@angular/common'
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SignUpComponent } from './Pages/sign-up/sign-up.component';
import {HttpClientModule} from '@angular/common/http';
import { PostsService } from './http-service';
import { DialogConfirmDeleteComponent } from './dialog/dialog-edit-user/dialog-edit-user';
import { ProductListComponent } from './adminPage/product-list/product-list.component';
import { NewProductComponent } from './adminPage/new-product/new-product.component';
import { DialogEditProductComponent } from './dialog/dialog-edit-product/dialog-edit-product.component';
import { ConfirmDeleteComponent } from './dialog/confirm-delete/confirm-delete.component';
import {MatButtonModule} from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { BiddingComponent } from './dialog/bidding/bidding.component';
import { BuyComponent } from './dialog/buy/buy.component';



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
    BiddingComponent,
    BuyComponent,
 
  
    
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
    HttpClientModule,
    MatButtonModule,
    MatAutocompleteModule,
  ],
  providers: [PostsService,],
  bootstrap: [AppComponent],
  entryComponents: [DialogConfirmDeleteComponent,DialogEditProductComponent,ConfirmDeleteComponent,BuyComponent,BiddingComponent],
})
export class AppModule { }
