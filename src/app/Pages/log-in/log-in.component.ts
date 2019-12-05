import { Component, OnInit } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RegisterForm } from "src/app/data-container/data-model";
import { Router } from '@angular/router';

@Component({
  selector: "app-log-in",
  templateUrl: "./log-in.component.html",
  styleUrls: ["./log-in.component.css"]
})
export class LogInComponent implements OnInit {
  constructor(private fb: FormBuilder,private router: Router) {}

  ngOnInit() {}

  profileForm = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", Validators.required]
  });

  get f() {
    return this.profileForm.controls;
  }
  onSubmit() {
    console.log(this.profileForm.controls.firstName);
    if(this.profileForm.controls.email.value == "admin@gmail.com"){
      this.router.navigateByUrl('/admin');
    }
    if(this.profileForm.controls.email.value == "user@gmail.com"){
      this.router.navigateByUrl('/home');
    }
    this.profileForm.get("email").setValue("");
    this.profileForm.get("password").setValue("");
  }
}
