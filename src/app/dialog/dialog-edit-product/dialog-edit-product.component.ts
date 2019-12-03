import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RegisterForm } from "src/app/data-Model/data-model";
import { ProductListComponent } from 'src/app/adminPage/product-list/product-list.component';

export interface DialogData {
  id1: number;
  Name1: string;
  Category1:string;
  Price1: number;
  Quantity1: number;
}

@Component({
  selector: 'app-dialog-edit-product',
  templateUrl: './dialog-edit-product.component.html',
  styleUrls: ['./dialog-edit-product.component.css']
})
export class DialogEditProductComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ProductListComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  profileForm = this.fb.group({
    id: ['',Validators.required],
    Name: ['',Validators.required],
    Category: ['',[Validators.required,Validators.email]],
    Price: ['',Validators.required],
    Quantity: ['',Validators.required]
  });

}
