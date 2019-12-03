import { Component, OnInit, ViewChild } from "@angular/core";
import { Sort, MatSortModule } from "@angular/material/sort";
import { UserList, ProductList } from "src/app/data";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { MatDialog } from "@angular/material";
import { DialogEditProductComponent } from 'src/app/dialog/dialog-edit-product/dialog-edit-product.component';
import { ConfirmDeleteComponent } from 'src/app/dialog/confirm-delete/confirm-delete.component';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  displayedColumns: string[] = [
    "id",
    "Name",
    "Category",
    "Price",
    "Quantity",
    "Action"
  ];

  dataSource = new MatTableDataSource(ProductList);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(id,Name,  Category, Price, Quantity): void {
    const dialogRef = this.dialog.open(DialogEditProductComponent, {
      width: "300px",
      data: {
        id1: id,
        Name1: Name,
        Category1: Category,
        Price1: Price,
        Quantity1: Quantity

      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        alert("Product edited");
      }
    });
  }

  onDelete(id) {
    ProductList.splice(id, 1);
    const dialogRef = this.dialog.open(ConfirmDeleteComponent, {
      width: "300px"
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        alert("Deleted");
        this.dataSource = new MatTableDataSource(ProductList);
      }
    });
  }
}
