import { Component, OnInit } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RegisterForm } from "src/app/data-container/data-model";
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  constructor(private fb: FormBuilder,private router: Router) {}

  ngOnInit() {}

  profileForm = this.fb.group({
    firstName: ["", [Validators.required, Validators.pattern("[a-zA-Z ]*")]],
    lastName: ["", [Validators.required, Validators.pattern("[a-zA-Z ]*")]],
    password: ["", Validators.required],
    confirmPassword: ["", Validators.required],
    email: ["", [Validators.required, Validators.email]],
    Phone: ["", ]
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

  checkConfirm(){
    this.profileForm.get("confirmPassword") === this.profileForm.get("Password")
  }

}
