import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-logindashboard',
  templateUrl: './logindashboard.component.html',
  styleUrls: ['./logindashboard.component.css']
})
export class LogindashboardComponent implements OnInit {
  login:any=[]
  constructor(private dataservice:DataService) { }
  getLoginData()
  {
    this.dataservice.getData().subscribe((res)=>
    {
     this.login=res
    })
  }

  ngOnInit(): void {
    this.getLoginData()
  }

}
