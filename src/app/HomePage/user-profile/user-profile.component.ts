import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PostsService } from "src/app/http-service";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.css"]
})
export class UserProfileComponent implements OnInit {
  constructor(private fb: FormBuilder, private postsService: PostsService) {}

  ngOnInit() {}

  profileForm = this.fb.group({
    fisrtName: ["", Validators.required],
    lastName: ["", Validators.required],
    email: ["", [Validators.required, Validators.email]],
    Phone: ["", Validators.required],
    Wallet: [""],
    role: [""]
  });

  onSubmit() {
    // this.postsService.createUser(this.profileForm.value).subscribe(data => {});
    // this.router.navigate(['/admin'])
    
  }
}
