import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  constructor(private swUpdate:SwUpdate) { }

  ngOnInit() {
    if(this.swUpdate.isEnabled){
     this.swUpdate.checkForUpdate().then( function(){
      console.log('Page2 Update Service Worker done');
     }).catch( function(){
       console.log('Page2 Update Service Worker - Error')
     });
    }
  }

}
