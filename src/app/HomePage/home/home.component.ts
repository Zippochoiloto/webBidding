import { Component, OnInit,ViewChild ,ElementRef} from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { homePage } from 'src/app/data-container/data';
import { DOCUMENT } from '@angular/common'; 
import {CommonModule} from '@angular/common'
import { NgModule } from '@angular/core'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  navLinks = homePage
  
  constructor() { }

  ngOnInit() {
  }
  
  showDialog(){
    let modal_t  = document.getElementById('modal_1')
    modal_t.classList.remove('hhidden')
    modal_t.classList.add('sshow');
}
closeDialog() {
    let modal_t  = document.getElementById('modal_1')
    modal_t.classList.remove('sshow')
    modal_t.classList.add('hhidden');
}
  
}
