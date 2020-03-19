import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { MyserviceService } from '../dashboard/myservice.service';


@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  
  @Output() private generateNumber = new EventEmitter<number>();

  randomNumber()
  {
    const randomNum = Math.random();
    this.generateNumber.emit(randomNum);
  }
  
  ngOnInit(): void {
  }
  userName:string="Ankita";
  updateUserName(uname){
    // this.userName = uname.value;
    this.designservice.userName.next(uname.value);
  }
  
  constructor(private designservice:MyserviceService){
    this.designservice.userName.subscribe(uname=>{
       this.userName = uname;
    });
  }
}
