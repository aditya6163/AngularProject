import { Component, OnInit } from '@angular/core';
import {Signup} from './signup'
import {FormGroup,FormControl} from '@angular/forms';
// import { DataService } from '../data.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form:FormGroup
 signup:Signup[]=[]
 
 
  constructor() { }

  ngOnInit(): void {
    this.form =new FormGroup(
      {
        username1:new FormControl(""),
        email:new FormControl(""),
        password1:new FormControl(""),
        repass: new FormControl("")
      })
 
  }

}
