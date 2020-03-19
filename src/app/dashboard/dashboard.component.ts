import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 
 data:any;
 name = "Welcome To Dashboard";
 value = "Hello";
 nameArr = [
   'vvbnvnmn',
   'fghjkl',
   'ertyuio',
   'rtyuio',
   'rtyuio',
   'dfghjkl',
 ]
 text = {
  'float':'right',
  'text-decoration':'underline',
  'font-size':'24px',
  'margin-left': '60%'
 }
 text1 = {
  'float':'left',
  'text-decoration':'underline',
  'font-size':'15px',
  'font-weight':'bold'
  
 }
 userName:string="Ankita";
 mytxt ="Ankita";
 updateUserName(uname){
  // this.userName = uname.value;
  this.designservice.userName.next(uname.value);
}

  constructor(private router:Router,private designservice:MyserviceService) {
    this.designservice.userName.subscribe(uname=>{
      this.userName = uname;
   });
   }
   logout(){
    localStorage.clear();
    this.router.navigate(['/login'])
  } 
  
  public randnum:number;
  public displaymsg(randnum:number)
  {
    this.randnum = randnum;
  }
  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem('userDetails'));
  }
  
}
