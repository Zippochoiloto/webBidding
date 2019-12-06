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

  disabled1: boolean = false;
  disabled2: boolean = false;
  disabled3: boolean = false;

  myControl = new FormControl();
  options: string[];
  options1: string[];
  constructor(private postsService: PostsService, public dialog: MatDialog) {}
  productList1 = new Array();
  // productListFilter = new Array();
  ngOnInit() {
    this.postsService.getProd().subscribe(data => {
      this.productList1 = Object.values(data);
      this.options = [
        ...new Set(this.productList1.map(x => {
          return x.Category;
        }))
      ];
    });
  }

  rangeunder1000Change() {
    if (this.checked1) {
      (this.productList1 = this.productList1.filter(x => {
        return x.priceStart <= 1000;
      })),
        (this.disabled2 = true),
        (this.disabled3 = true);
    } else {
      this.postsService.getProd().subscribe(data => {
        this.productList1 = Object.values(data);
        (this.disabled2 = false), (this.disabled3 = false);
      });
    }
  }

  range1000To3000Change() {
    if (this.checked2) {
      (this.productList1 = this.productList1.filter(x => {
        return x.priceStart <= 3000 && x.priceStart > 1000;
      })),
        (this.disabled1 = true),
        (this.disabled3 = true);
    } else {
      this.postsService.getProd().subscribe(data => {
        this.productList1 = Object.values(data);
        (this.disabled1 = false), (this.disabled3 = false);
      });
    }
  }

  rangeMore3000Change() {
    if (this.checked3) {
      (this.productList1 = this.productList1.filter(x => {
        return x.priceStart > 3000;
      })),
        (this.disabled1 = true),
        (this.disabled2 = true);
    } else {
      this.postsService.getProd().subscribe(data => {
        this.productList1 = Object.values(data);
        (this.disabled1 = false), (this.disabled2 = false);
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

  openBidDialog(): void {
    const dialogRef = this.dialog.open(BiddingComponent, {
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
}
