import { Component, OnDestroy } from '@angular/core';
import { PostsService } from './http-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy  {
  title = 'Web-Bidding';
  private subscription: Subscription;

  constructor(private postsService:PostsService) {
    // this.getPost();
  }
  getItem = (val) =>{
    console.log(val.name)
  }

  // getPost() {
  //  this.subscription = this.postsService.getPost().subscribe(data =>{
  //     console.log(data);
  //   })
  // }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
