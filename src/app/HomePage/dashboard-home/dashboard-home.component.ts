import { Component, OnInit } from "@angular/core";
import { PostsService } from "src/app/http-service";
import { FormControl } from "@angular/forms";
import { MatDialog } from "@angular/material";
import { BuyComponent } from "src/app/dialog/buy/buy.component";
import { BiddingComponent } from "src/app/dialog/bidding/bidding.component";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-dashboard-home",
  templateUrl: "./dashboard-home.component.html",
  styleUrls: ["./dashboard-home.component.css"]
})
export class DashboardHomeComponent implements OnInit {
  checked1: boolean = false;
  checked2: boolean = false;
  checked3: boolean = false;

  myControl = new FormControl();
  options: string[];
  productList1 = new Array();
  public bidList1 = new Array();
  constructor(
    private postsService: PostsService,
    public dialog: MatDialog,
    private activatedRoute: ActivatedRoute
  ) {}

  // productListFilter = new Array();
  ngOnInit() {
    this.postsService.getProd().subscribe(data => {
      this.productList1 = Object.values(data);

      this.options = [
        ...new Set(
          this.productList1.map(x => {
            return x.Category;
          })
        )
      ];
    });

    this.postsService.getBid().subscribe(data => {
      this.bidList1 = Object.values(data);
      // console.log(this.bidList1[1]);
    });
  }

  rangeunder1000Change() {
    if (this.checked1) {
      this.productList1 = this.productList1.filter(x => {
        return x.priceStart <= 1000;
      });
    } else {
      this.postsService.getProd().subscribe(data => {
        this.productList1 = Object.values(data);
      });
    }
  }

  range1000To3000Change() {
    if (this.checked2) {
      this.productList1 = this.productList1.filter(x => {
        return x.priceStart <= 3000 && x.priceStart > 1000;
      });
    } else {
      this.postsService.getProd().subscribe(data => {
        this.productList1 = Object.values(data);
      });
    }
  }

  rangeMore3000Change() {
    if (this.checked3) {
      this.productList1 = this.productList1.filter(x => {
        return x.priceStart > 3000;
      });
    } else {
      this.postsService.getProd().subscribe(data => {
        this.productList1 = Object.values(data);
      });
    }
  }

  onSearch() {
    if (this.myControl.value) {
      this.productList1 = this.productList1.filter(x => {
        return x.Category == this.myControl.value;
      });
    } else {
      this.postsService.getProd().subscribe(data => {
        this.productList1 = Object.values(data);
      });
    }
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
