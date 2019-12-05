import { Component, OnInit } from '@angular/core';
import { PostsService } from "src/app/http-service";
import { FormControl } from "@angular/forms";


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  checked1: boolean = false;
  checked2: boolean = false;
  checked3: boolean = false;

  disabled1: boolean = false;
  disabled2: boolean = false;
  disabled3: boolean = false;

  myControl = new FormControl();
  options : string[];

  constructor(private postsService: PostsService) {}
  productList1 = new Array();
  productList2 = new Array();
  // productListFilter = new Array();
  ngOnInit() {
    this.postsService.getProd().subscribe(data => {
      this.productList1 = Object.values(data);
      this.productList1 = this.productList1.filter(x => {
        return x.Category == "Ô tô" ;
      
      
    })
    this.productList2 =[...this.productList1]
     this.options = [
      ...this.productList1.map(x => {
        return x.productName;
      })
    ];
  })
}

  rangeunder1000Change() {
    if (this.checked1) {
      (this.productList1 = this.productList1.filter(x => {
        return x.priceStart <= 1000;
      })),
        (this.disabled2 = true),
        (this.disabled3 = true);
    } else {
      this.productList1 = this.productList2
      this.disabled2 = false,
        this.disabled3 = false;
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
      this.productList1 = this.productList2
      this.disabled1 = false,
        this.disabled3 = false;
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
       this.productList1 = this.productList2,
       this.disabled2 = false,
        this.disabled1 = false;
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
}
