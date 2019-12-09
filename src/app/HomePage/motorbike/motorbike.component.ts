import { Component, OnInit } from "@angular/core";
import { PostsService } from "src/app/http-service";
import { FormControl } from "@angular/forms";
import { BuyComponent } from "src/app/dialog/buy/buy.component";
import { BiddingComponent } from "src/app/dialog/bidding/bidding.component";
import { MatDialog } from "@angular/material";

@Component({
  selector: "app-motorbike",
  templateUrl: "./motorbike.component.html",
  styleUrls: ["./motorbike.component.css"]
})
export class MotorbikeComponent implements OnInit {
  checked1: boolean = false;
  checked2: boolean = false;
  checked3: boolean = false;


  myControl = new FormControl();
  options : string[];

  constructor(private postsService: PostsService,public dialog: MatDialog) {}
  productList1 = new Array();
  productList2 = new Array();
  public bidList1 = new Array();
  // productListFilter = new Array();
  ngOnInit() {
    this.postsService.getProd().subscribe(data => {
      this.productList1 = Object.values(data);
      this.productList1 = this.productList1.filter(x => {
        return x.Category == "Xe máy";
      });
      this.productList2 = [...this.productList1];
      this.options = [
        ...this.productList1.map(x => {
          return x.productName;
        })
      ]
    });

    this.postsService.getBid().subscribe(data => {
      this.bidList1 = Object.values(data);
      console.log(this.bidList1[1]);
    });
  }

  rangeunder1000Change() {
    if (this.checked1) {
      (this.productList1 = this.productList1.filter(x => {
        return x.priceStart <= 1000;
      }))
    } else {
      this.productList1 = this.productList2;
 
    }
  }

  range1000To3000Change() {
    if (this.checked2) {
      (this.productList1 = this.productList1.filter(x => {
        return x.priceStart <= 3000 && x.priceStart > 1000;
      }))
    } else {
      this.productList1 = this.productList2;

    }
  }

  rangeMore3000Change() {
    if (this.checked3) {
      (this.productList1 = this.productList1.filter(x => {
        return x.priceStart > 3000;
      }))
    } else {
      (this.productList1 = this.productList2)
    }
  }
  onSearch() {
    if (this.myControl.value) {
      this.productList1 = this.productList1.filter(x => {
        return x.productName == this.myControl.value;
      });
    } else {
      
        this.productList1 = this.productList2;
      };
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
