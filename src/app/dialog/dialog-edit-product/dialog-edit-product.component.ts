import { Component, OnInit, Inject } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RegisterForm } from "src/app/data-container/data-model";
import { ProductListComponent } from "src/app/adminPage/product-list/product-list.component";
import { PostsService } from "src/app/http-service";

export interface DialogData {
  id1: number;
  productName1: string;
  description1: string;
  productImage1: string;
  Category1: string;
  priceStart1: number;
  buyPrice1: number;
  startTime1: string;
  endTime1: string;
  status1: string;
}

@Component({
  selector: "app-dialog-edit-product",
  templateUrl: "./dialog-edit-product.component.html",
  styleUrls: ["./dialog-edit-product.component.css"]
})
export class DialogEditProductComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ProductListComponent>,
    private fb: FormBuilder,
    private postsService: PostsService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit() {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  profileForm = this.fb.group({
    id: [this.data.id1, Validators.required],
    productName: [this.data.productName1, Validators.required],
    description: [this.data.description1, Validators.required],
    productImage: [this.data.productImage1, Validators.required],
    Category: [this.data.Category1, Validators.required],
    priceStart: [this.data.priceStart1, Validators.required],
    buyPrice: [this.data.buyPrice1, Validators.required],
    startTime: [this.data.startTime1, Validators.required],
    endTime: [this.data.endTime1, Validators.required],
    status: [this.data.status1, Validators.required]
  });

  onYesClick() {
    this.postsService
      .updateProd(this.data.id1, this.profileForm.value)
      .subscribe(data => {});
    console.log(this.profileForm.value)
  }
}
