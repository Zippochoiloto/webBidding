import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./HomePage/about/about.component";
import { HomeComponent } from "./HomePage/home/home.component";
import { AdminComponent } from "./adminPage/admin/admin.component";
import { DashBoardComponent } from "./adminPage/dash-board/dash-board.component";
import { UserListComponent } from "./adminPage/user-list/user-list.component";
import { NewUserComponent } from "./adminPage/new-user/new-user.component";
import { PageNotFoundComponent } from "./Pages/page-not-found/page-not-found.component";
import { CarComponent } from './HomePage/car/car.component';
import { ApartmentComponent } from './HomePage/apartment/apartment.component';
import { MotorbikeComponent } from './HomePage/motorbike/motorbike.component';
import { DashboardHomeComponent } from './HomePage/dashboard-home/dashboard-home.component';
import { LogInComponent } from './Pages/log-in/log-in.component';
import { SignUpComponent } from './Pages/sign-up/sign-up.component';
import { ProductListComponent } from './adminPage/product-list/product-list.component';
import { NewProductComponent } from './adminPage/new-product/new-product.component';


{CarComponent}
const routes: Routes = [
  
  {
    
    path: "home",
    component: HomeComponent,
    children: [
      { path: "about", component: AboutComponent },
      { path: "", component: DashboardHomeComponent },
      { path: "car", component: CarComponent },
      { path: "apartment", component: ApartmentComponent },
      { path: "motorbike", component: MotorbikeComponent },
    ]
  },
  { path: "logIn", component: LogInComponent },
  { path: "signUp", component: SignUpComponent },
  {
    path: "admin",
    component: AdminComponent,
    children: [
      { path: "", component: UserListComponent },
      { path: "userList", component: UserListComponent },
      { path: "productList", component: ProductListComponent },
      { path: "newUser", component: NewUserComponent },
      { path: "newProduct", component: NewProductComponent },
      { path: "newUser/:id", component: NewUserComponent },
      { path: "**", component: PageNotFoundComponent }
    ]
  },
  { path: "", component: HomeComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
