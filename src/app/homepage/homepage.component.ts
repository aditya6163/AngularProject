import { Component, OnInit } from '@angular/core';
import {Home} from './home';
import {FormGroup,FormControl} from '@angular/forms'
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit 
{
  img1:string="../../assets/Apple Watch Series 3.jpg";
  img2:string="../../assets/Noise NoiseFit Fusion.jpg";
  img3:string="../../assets/samsung galaxy watch 2.jpg";
  img4:string="../../assets/fossil.jpg";
  img5:string="../../assets/fossil2.jpg";
  img6:string="../../assets/honor.jpg";
  img7:string="../../assets/huami.jpg";
  img8:string="../../assets/huawei.jpg";
 img9:string="../../assets/fossil3.jpg";








  // func1()
  // {
  //   this.form.value
  // }
  constructor() {}

  ngOnInit(): void {
  }

}
