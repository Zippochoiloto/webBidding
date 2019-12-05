import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RegisterForm } from "src/app/data-container/data-model";
import { PostsService } from "src/app/http-service";
import { Router } from '@angular/router';


@Component({
  selector: "app-new-user",
  templateUrl: "./new-user.component.html",
  styleUrls: ["./new-user.component.css"]
})
export class NewUserComponent implements OnInit {
  constructor(private fb: FormBuilder, private postsService: PostsService,private router:Router) {}
  userList1 = new Array();
  userListAdd = new Array();
  id1: number;
  ngOnInit() {}

  profileForm = this.fb.group({
    // id: this.id1,
    fisrtName: ["", [Validators.required, Validators.pattern("[a-zA-Z ]*")]],
    lastName: ["", [Validators.required, Validators.pattern("[a-zA-Z ]*")]],
    email: ["", [Validators.required, Validators.email]],
    Phone: ["", Validators.required],
    Wallet: [""],
    role: [""]
  });

  get f() {
    return this.profileForm.controls;
  }
  onSubmit() {
    this.postsService.createUser(this.profileForm.value).subscribe(data => {});
    // this.router.navigate(['/admin'])
    
  }
}
