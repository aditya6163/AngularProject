import { Component, OnInit } from '@angular/core';
import {Login} from './login';
import {FormGroup,FormControl} from '@angular/forms'; 
import { DataService } from '../data.service';
//import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
{
  form:FormGroup
 login:Login[]=[]


  func()
  {
   this.dataservice.saveData(this.form.value)
   .subscribe((res)=>{
alert("data saved")
   })
  }
  constructor(private dataservice:DataService) { }

  ngOnInit():void {
    this.form =new FormGroup(
      {
        username:new FormControl(""),
        password:new FormControl("")
      })
  }

}
