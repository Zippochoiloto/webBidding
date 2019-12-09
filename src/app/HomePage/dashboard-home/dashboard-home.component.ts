import { Component, OnInit } from "@angular/core";
import { PostsService } from "src/app/http-service";
import { FormControl } from "@angular/forms";
import { MatDialog } from "@angular/material";
import { BuyComponent } from "src/app/dialog/buy/buy.component";
import { BiddingComponent } from "src/app/dialog/bidding/bidding.component";

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
  constructor(private postsService: PostsService, public dialog: MatDialog) {}

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
      console.log(this.bidList1[1]);
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

  openBuyDialog(): void {
    const dialogRef = this.dialog.open(BuyComponent, {
      width: "300px"
      // data: {
      //   price1: "7000"
      // }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
      }
    });
  }

  openBidDialog(price): void {
    const dialogRef = this.dialog.open(BiddingComponent, {
      width: "300px",
      data: {
        price1: price
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
      }
    });
  }
}
