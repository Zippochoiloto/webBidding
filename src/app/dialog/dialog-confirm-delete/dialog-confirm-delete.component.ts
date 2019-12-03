import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UserListComponent } from '../../adminPage/user-list/user-list.component';
import { UserList } from '../../data';
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RegisterForm } from "src/app/data-Model/data-model";
import { PostsService } from 'src/app/posts.service';


export interface DialogData {
  id1: number;
  fisrtName1: string;
  lastName1:string;
  email1: string;
  Wallet1: number;
  Phone1: number;
  role1: string;
}

@Component({
  selector: 'app-dialog-confirm-delete',
  templateUrl: './dialog-confirm-delete.component.html',
  styleUrls: ['./dialog-confirm-delete.component.css']
})
export class DialogConfirmDeleteComponent implements OnInit {

  ngOnInit(){
 
    

  }
  constructor(
    public dialogRef: MatDialogRef<UserListComponent>,
    private fb: FormBuilder,
    private postsService: PostsService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  profileForm = this.fb.group({
    fisrtName: ['',Validators.required],
    lastName: ['',Validators.required],
    email: ['',[Validators.required,Validators.email]],
    Phone: ['',Validators.required],
    Wallet: ['',],
    role: ['',]
  });
   
  onYesClick(){
    this.postsService.updateUser(this.data.id1 ,this.profileForm.value).subscribe(data =>{

    })
    console.log(this.profileForm.value)
    console.log(this.data.id1)
  }

}
