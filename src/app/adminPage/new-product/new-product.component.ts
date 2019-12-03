import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RegisterForm } from "src/app/data-Model/data-model";

@Component({
  selector: "app-new-product",
  templateUrl: "./new-product.component.html",
  styleUrls: ["./new-product.component.css"]
})
export class NewProductComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  profileForm = this.fb.group({
    Name: ["", Validators.required],
    Category: ["", Validators.required],
    Price: ["", Validators.required],
    Quantity: ["", Validators.required]
  });

  onSubmit() {
    this.profileForm.get("Name").setValue("");
    this.profileForm.get("Category").setValue("");
    this.profileForm.get("Price").setValue("");
    this.profileForm.get("Quantity").setValue("");
  }
}
