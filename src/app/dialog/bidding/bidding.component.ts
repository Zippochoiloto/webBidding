import { Component, OnInit, Inject } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { DashboardHomeComponent } from "src/app/HomePage/dashboard-home/dashboard-home.component";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PostsService } from "src/app/http-service";
import { ApartmentComponent } from 'src/app/HomePage/apartment/apartment.component';
import { MotorbikeComponent } from 'src/app/HomePage/motorbike/motorbike.component';
import { CarComponent } from 'src/app/HomePage/car/car.component';

export interface DialogData {
  id: string;
  productsId: number;
  usersId: number;
  biddingPrice: number;
  timeToBid: string;
}
@Component({
  selector: "app-bidding",
  templateUrl: "./bidding.component.html",
  styleUrls: ["./bidding.component.css"]
})
export class BiddingComponent implements OnInit {
  price2 = parseInt(this.data.biddingPrice.toString());
  minPrice = this.price2 + 200;
  constructor(
    public dialogRef: MatDialogRef<DashboardHomeComponent>,
    private fb: FormBuilder,
    private postsService: PostsService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit() {
    console.log(this.minPrice);
  }

  profileForm = this.fb.group({
    price: ["", [Validators.required, Validators.min(this.minPrice + 200)]]
  });

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick() {
    this.data.biddingPrice = this.profileForm.get("price").value.toString();
    console.log(this.data);

    this.postsService.updateBid(this.data.id, this.data).subscribe(data => {});
  }
}
