import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./HomePage/about/about.component";
import { HomeComponent } from "./HomePage/home/home.component";
import { AdminComponent } from "./adminPage/admin/admin.component";
import { DashBoardComponent } from "./adminPage/dash-board/dash-board.component";
import { UserListComponent } from "./adminPage/user-list/user-list.component";
import { NewUserComponent } from "./adminPage/new-user/new-user.component";
import { EditUserComponent } from "./adminPage/edit-user/edit-user.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { CarComponent } from './HomePage/car/car.component';
import { ApartmentComponent } from './HomePage/apartment/apartment.component';
import { MotorbikeComponent } from './HomePage/motorbike/motorbike.component';
import { DashboardHomeComponent } from './HomePage/dashboard-home/dashboard-home.component';
import { LogInComponent } from './log-in/log-in.component';


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
  {
    path: "admin",
    component: AdminComponent,
    children: [
      { path: "", component: DashBoardComponent },
      { path: "userList", component: UserListComponent },
      { path: "newUser", component: NewUserComponent },
      { path: "newUser/:id", component: NewUserComponent },
      { path: "editUser", component: EditUserComponent },
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
