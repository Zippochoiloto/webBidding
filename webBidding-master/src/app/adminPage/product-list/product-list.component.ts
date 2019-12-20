import { Component, OnInit, ViewChild } from "@angular/core";
import { Sort, MatSortModule } from "@angular/material/sort";
import { UserList } from "src/app/data-container/data";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { MatDialog } from "@angular/material";
import { DialogEditProductComponent } from "src/app/dialog/dialog-edit-product/dialog-edit-product.component";
import { ConfirmDeleteComponent } from "src/app/dialog/confirm-delete/confirm-delete.component";
import { productList } from "src/app/data-container/data-model";
import { PostsService } from "src/app/http-service";
import { PipeService } from 'src/app/service/pipe.service';


@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  productList1 = new Array();
  constructor(public dialog: MatDialog, private postsService: PostsService,private pipeProd: PipeService) {}

  displayedColumns: string[] = [
    "id",
    "Name",
    "Category",
    "Start Price",
    "Buy Price",
    "Picture",
    "Action"
  ];

  dataSource = new MatTableDataSource(this.productList1);

  ngOnInit() {
    this.postsService.getProd().subscribe(data => {
      this.productList1 = Object.values(data);
      this.pipeProd.pipeProd(this.productList1)
      console.log(this.productList1);
      
      this.dataSource = new MatTableDataSource(this.productList1);
    });
  }



  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(
    id,
    productName,
    description,
    productImage,
    Category,
    priceStart,
    buyPrice,
    startTime,
    endTime,
    status
  ): void {
    const dialogRef = this.dialog.open(DialogEditProductComponent, {
      width: "300px",
      data: {
        id1: id,
        productName1: productName,
        description1: description,
        productImage1: productImage,
        Category1: Category,
        priceStart1: priceStart,
        buyPrice1:buyPrice,
        startTime1: startTime,
        endTime1: endTime,
        status1: status
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.postsService.getProd().subscribe(data => {
          this.productList1 = Object.values(data);
          this.dataSource = new MatTableDataSource(this.productList1);
        });
      }
    });
  }

  onDelete(id) {
    // ProductList.splice(id, 1);
    const dialogRef = this.dialog.open(ConfirmDeleteComponent, {
      width: "300px"
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.postsService.deleteProd(id + 1).subscribe(data => {
          this.postsService.getProd().subscribe(data => {
            this.productList1 = Object.values(data);
            this.pipeProd.pipeProd(this.productList1)
            this.dataSource = new MatTableDataSource(this.productList1);
          });
        });
      }
    });
  }
}
