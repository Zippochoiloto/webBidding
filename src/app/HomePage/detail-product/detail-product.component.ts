import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PostsService } from "src/app/http-service";
import { BuyComponent } from "src/app/dialog/buy/buy.component";
import { BiddingComponent } from "src/app/dialog/bidding/bidding.component";
import { MatDialog } from "@angular/material";

@Component({
  selector: "app-detail-product",
  templateUrl: "./detail-product.component.html",
  styleUrls: ["./detail-product.component.css"]
})
export class DetailProductComponent implements OnInit {
  id: string;
  product;
  bid;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postsService: PostsService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.postsService.getProdID(this.id).subscribe(data => {
      this.product = data;
      // console.log(this.product);
    });
    this.postsService.getprodBid(this.id).subscribe(data => {
      this.bid = data;
      // console.log(this.bid);
    });
  }

  openBuyDialog(id1,productName1,description1,productImage1,Category1,priceStart1,buyPrice1,startTime1,endTime1,status1): void {
    const dialogRef = this.dialog.open(BuyComponent, {
      width: "300px",
      data: {
        id: id1,
        productName: productName1,
        description: description1,
        productImage: productImage1,
        Category: Category1,
        priceStart: priceStart1,
        buyPrice: buyPrice1,
        startTime: startTime1,
        endTime: endTime1,
        status: status1

      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
      }
    });
  }

  openBidDialog(id1, productsId1, usersId1, biddingPrice1, timeToBid1): void {
    const dialogRef = this.dialog.open(BiddingComponent, {
      width: "300px",
      data: {
        id: id1,
        productsId: productsId1,
        usersId: usersId1,
        biddingPrice: biddingPrice1,
        timeToBid: timeToBid1
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
      }
    });
  }
}
