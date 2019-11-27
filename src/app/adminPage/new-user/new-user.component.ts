import { Component, OnInit } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RegisterForm } from "src/app/data-Model/data-model";

@Component({
  selector: "app-new-user",
  templateUrl: "./new-user.component.html",
  styleUrls: ["./new-user.component.css"]
})
export class NewUserComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
  submitted = false;

  registerForm = new RegisterForm();

  onSubmit() {
    this.submitted = true;
  }

  newFrom() {
    this.registerForm = new RegisterForm();
  }
}
