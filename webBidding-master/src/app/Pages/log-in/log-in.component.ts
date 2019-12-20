import { Component, OnInit } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RegisterForm } from "src/app/data-container/data-model";
import { Router } from "@angular/router";
import { PostsService } from "src/app/http-service";

@Component({
  selector: "app-log-in",
  templateUrl: "./log-in.component.html",
  styleUrls: ["./log-in.component.css"]
})
export class LogInComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private postService: PostsService
  ) {}

  ngOnInit() {}

  profileForm = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", Validators.required]
  });

  get f() {
    return this.profileForm.controls;
  }
  onSubmit() {
    this.profileForm.controls.password.setValue(
      parseInt(this.profileForm.controls.password.value)
    );
    console.log(this.profileForm.value);

    this.postService.login(this.profileForm.value).subscribe(data => {
      if (data) {
        if (data["role"] == 1) {
          this.router.navigateByUrl("/admin");
        } else {
          this.router.navigateByUrl("/home");
        }
      } else {
        alert("ID is invalid");
      }
    });
  }
}
