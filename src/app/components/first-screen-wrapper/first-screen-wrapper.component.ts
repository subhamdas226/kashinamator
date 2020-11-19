import {Component, NgModule,ViewChild,ElementRef, OnInit} from '@angular/core'
import { stringify } from 'querystring';
import { from } from 'rxjs';

import { NavbarComponent } from "../navbar/navbar.component"
@Component({
  selector: 'app-first-screen-wrapper',
  templateUrl: './first-screen-wrapper.component.html',
  styleUrls: ['./first-screen-wrapper.component.css']
})
export class FirstScreenWrapperComponent implements OnInit {
  
  @ViewChild('image1') class:ElementRef;
  
  constructor() { }
  nav:NavbarComponent
  
  ngOnInit(): void {
    const clicke = this.nav.clicked() ;
     if(clicke==1){
       
      const img = document.getElementsByClassName('image1');
      // img.style.display='none';
      this.class.nativeElement.hidden=true;
     }
  }
  
   
   

}
