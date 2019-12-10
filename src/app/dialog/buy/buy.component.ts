import { Component, OnInit,Inject } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { DashboardHomeComponent } from "src/app/HomePage/dashboard-home/dashboard-home.component";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PostsService } from "src/app/http-service";

export interface DialogData {
  id: number;
  productName: number;
  description: number;
  productImage: number;
  Category: string;
  priceStart: string;
  buyPrice: number;
  startTime: string;
  endTime: string;
  status: string;
}

@Component({
  selector: "app-buy",
  templateUrl: "./buy.component.html",
  styleUrls: ["./buy.component.css"]
})
export class BuyComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DashboardHomeComponent>,
    private fb: FormBuilder,
    private postsService: PostsService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit() {}
  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick() {
    this.data.status = "Sold"
    console.log(this.data)
    this.postsService.updateProd(this.data.id,this.data).subscribe(data => {});
  }
}
