import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RegisterForm } from "src/app/data-Model/data-model";

@Component({
  selector: "app-new-user",
  templateUrl: "./new-user.component.html",
  styleUrls: ["./new-user.component.css"]
})
export class NewUserComponent implements OnInit {
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  profileForm = this.fb.group({
    firstName: ['',Validators.required],
    lastName: ['',Validators.required],
    email: ['',[Validators.required,Validators.email]],
    Phone: ['',Validators.required],
    wallet: ['',],
    role: ['',]
  });
   
  get f() {
    return this.profileForm.controls;
  }
  onSubmit(){
    console.log(this.profileForm.controls.firstName);
    this.profileForm.get('firstName').setValue('')
    this.profileForm.get('lastName').setValue('')
    this.profileForm.get('email').setValue('')
    this.profileForm.get('Phone').setValue('')
    this.profileForm.get('wallet').setValue('')
    this.profileForm.get('role').setValue('')

  }
}
