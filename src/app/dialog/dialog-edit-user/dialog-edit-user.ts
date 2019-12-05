import { Component, OnInit, Inject } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { UserListComponent } from "../../adminPage/user-list/user-list.component";
import { UserList } from "../../data-container/data";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RegisterForm } from "src/app/data-container/data-model";
import { PostsService } from "src/app/http-service";

export interface DialogData {
  id1: number;
  fisrtName1: string;
  lastName1: string;
  email1: string;
  Wallet1: number;
  Phone1: number;
  role1: string;
}

@Component({
  selector: "app-dialog-edit-user",
  templateUrl: "./dialog-edit-user.html",
  styleUrls: ["./dialog-edit-user.css"]
})
export class DialogConfirmDeleteComponent implements OnInit {
  ngOnInit() {}
  constructor(
    public dialogRef: MatDialogRef<UserListComponent>,
    private fb: FormBuilder,
    private postsService: PostsService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
    console.log(this.profileForm.value);
  }
  profileForm = this.fb.group({
    fisrtName: [this.data.fisrtName1, Validators.required],
    lastName: [this.data.lastName1, Validators.required],
    email: [this.data.email1, [Validators.required, Validators.email]],
    Phone: [this.data.Phone1, Validators.required],
    Wallet: [this.data.Wallet1],
    role: [this.data.role1]
  });

  onYesClick() {
    this.postsService
      .updateUser(this.data.id1, this.profileForm.value)
      .subscribe(data => {});
    // console.log(this.profileForm.value);
    // console.log(this.data.id1);
  }
}
