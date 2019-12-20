import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RegisterForm } from "src/app/data-container/data-model";
import { PostsService } from 'src/app/http-service';

@Component({
  selector: "app-new-product",
  templateUrl: "./new-product.component.html",
  styleUrls: ["./new-product.component.css"]
})
export class NewProductComponent implements OnInit {
  constructor(private fb: FormBuilder,private postsService: PostsService) {}

  ngOnInit() {}

  profileForm = this.fb.group({
    // id: ["", Validators.required],
    productName: ["", Validators.required],
    description: ["", Validators.required],
    productImage: [""],
    Category: ["", Validators.required],
    priceStart: ["", Validators.required],
    buyPrice: ["", Validators.required],
    startTime: ["", Validators.required],
    endTime: ["", Validators.required],
    status: ["Avaiable", Validators.required],
  });

  onSubmit() {
    
    this.postsService.createProd(this.profileForm.value).subscribe(data =>{

    })
  }
}
