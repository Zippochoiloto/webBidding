import { Component, OnInit } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { DashboardHomeComponent } from "src/app/HomePage/dashboard-home/dashboard-home.component";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";


@Component({
  selector: "app-bidding",
  templateUrl: "./bidding.component.html",
  styleUrls: ["./bidding.component.css"]
})
export class BiddingComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<DashboardHomeComponent>,private fb: FormBuilder) {}

  ngOnInit() {}

  profileForm = this.fb.group({
    price: ["", [Validators.required, Validators.min(4200)]],
  });

  onNoClick(): void {
    this.dialogRef.close();
  }
}
