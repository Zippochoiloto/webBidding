import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { AdminComponent } from "./adminPage/admin/admin.component";
import { DashBoardComponent } from "./adminPage/dash-board/dash-board.component";
import { UserListComponent } from "./adminPage/user-list/user-list.component";
import { NewUserComponent } from "./adminPage/new-user/new-user.component";
import { EditUserComponent } from "./adminPage/edit-user/edit-user.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "about", component: AboutComponent },
  { path: "Home", component: HomeComponent },
  
  {
    path: "admin",
    component: AdminComponent,
    children: [
      
      { path: '', component: DashBoardComponent },
      { path: "userList", component: UserListComponent },
      { path: "newUser", component: NewUserComponent },
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
