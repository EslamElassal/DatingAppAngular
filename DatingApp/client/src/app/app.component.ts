import { Component, OnInit } from '@angular/core';
import {SerService} from './service/ser.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'client';
  users:any;
  constructor(private api:SerService){
    this.getUsers ();
    this.title="ASD";
  }
   
  getUsers  () {
    this.users=this.api.getData().subscribe(response=>{
      
     this.users = response;
    },err=>{
      console.log(err);
    });;
  }
}
