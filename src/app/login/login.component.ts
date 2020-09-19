import { Component, OnInit } from '@angular/core';
import {Login} from './login';
import {FormGroup,FormControl} from '@angular/forms'; 
import { DataService } from '../data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
{
  form:FormGroup




  func()
  {
   // console.log(this.form.value)
   this.dataservice.saveData(this.form.value)
   .subscribe((res)=>{
    alert("data saved successfully")
   })
  
  }

  constructor(private dataservice:DataService) { }

  ngOnInit():void {
    // this.getLoginData()
    this.form =new FormGroup(
      {
        username:new FormControl(""),
        password:new FormControl("")
      })
       
  }

}
