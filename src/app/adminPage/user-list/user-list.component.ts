import { Component, OnInit, ViewChild, Inject } from "@angular/core";
import { Sort, MatSortModule } from "@angular/material/sort";
import { UserList } from "src/app/data-container/data";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { MatDialog } from "@angular/material";
import { DialogConfirmDeleteComponent } from "src/app/dialog/dialog-edit-user/dialog-edit-user";
import { userList } from "src/app/data-container/data-model";
import { ConfirmDeleteComponent } from "src/app/dialog/confirm-delete/confirm-delete.component";
import { PostsService } from "src/app/http-service";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"]
})
export class UserListComponent implements OnInit {
  userList1 = new Array();
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(public dialog: MatDialog, private postsService: PostsService) {}
  ngOnInit() {
    this.postsService.getPost().subscribe(data => {
      this.userList1 = Object.values(data);
      this.dataSource.sort = this.sort;
      this.dataSource = new MatTableDataSource(this.userList1);
    });
  }

  displayedColumns: string[] = [
    "id",
    "First Name",
    "Last Name",
    "email",
    "Wallet",
    "Phone Number",
    "Role",
    "Action"
  ];
  dataSource = new MatTableDataSource(UserList);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(id, fisrtName, lastName, email, wallet, phone, role): void {
    const dialogRef = this.dialog.open(DialogConfirmDeleteComponent, {
      width: "300px",
      data: {
        id1: id,
        fisrtName1: fisrtName,
        lastName1: lastName,
        email1: email,
        Phone1: phone,
        Wallet1: wallet,
        role1: role
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // alert("User edited");
        this.postsService.getPost().subscribe(data => {
          this.userList1 = Object.values(data);
          this.dataSource = new MatTableDataSource(this.userList1);
        });
      }
    });
  }

  onDelete(id) {
    // UserList.splice(id, 1);

    const dialogRef = this.dialog.open(ConfirmDeleteComponent, {
      width: "300px"
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        alert("Deleted");
        // this.dataSource = new MatTableDataSource(UserList);
        this.postsService.deleteUser(id + 1).subscribe(data => {
          this.postsService.getPost().subscribe(data => {
            this.userList1 = Object.values(data);
            this.dataSource = new MatTableDataSource(this.userList1);
          });
        });
      }
    });
  }
}
