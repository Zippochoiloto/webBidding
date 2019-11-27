import { Component, OnInit, ViewChild } from "@angular/core";
import { Sort, MatSortModule } from "@angular/material/sort";
import { UserList } from "src/app/data";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"]
})
export class UserListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  displayedColumns: string[] = [
    "id",
    "name",
    "email",
    "Wallet",
    "Phone Number",
    "Role"
  ];
  dataSource = new MatTableDataSource(UserList);;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
