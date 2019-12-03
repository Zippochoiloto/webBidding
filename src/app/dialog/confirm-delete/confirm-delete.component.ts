import { Component, OnInit, Inject } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { UserListComponent } from "../../adminPage/user-list/user-list.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { RegisterForm } from "src/app/data-Model/data-model";
import { ProductListComponent } from "src/app/adminPage/product-list/product-list.component";

@Component({
  selector: "app-confirm-delete",
  templateUrl: "./confirm-delete.component.html",
  styleUrls: ["./confirm-delete.component.css"]
})
export class ConfirmDeleteComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<UserListComponent,ProductListComponent>) {}

  ngOnInit() {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
