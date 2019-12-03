import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RegisterForm } from "src/app/data-Model/data-model";
import { PostsService } from 'src/app/posts.service';


@Component({
  selector: "app-new-user",
  templateUrl: "./new-user.component.html",
  styleUrls: ["./new-user.component.css"]
})
export class NewUserComponent implements OnInit {
  constructor(private fb: FormBuilder, private postsService: PostsService) { }
  userList1 = new Array
  userListAdd = new Array
  id1:number
  ngOnInit() {
    
    
  }
  
  profileForm = this.fb.group({
    // id: this.id1,
    fisrtName: ['',Validators.required],
    lastName: ['',Validators.required],
    email: ['',[Validators.required,Validators.email]],
    Phone: ['',Validators.required],
    Wallet: [''],
    role: ['']
  });
  
   
  get f() {
    return this.profileForm.controls;
  }
  onSubmit(){
    this.postsService.createUser(this.profileForm.value).subscribe(data =>{

    })
    alert('User add')

    this.profileForm.get('firstName').setValue('')
    this.profileForm.get('lastName').setValue('')
    this.profileForm.get('email').setValue('')
    this.profileForm.get('Phone').setValue('')
    this.profileForm.get('wallet').setValue('')
    this.profileForm.get('role').setValue('')

  }
}
