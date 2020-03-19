import { Component,Input,Output,EventEmitter } from '@angular/core';
import { MyserviceService } from '../dashboard/myservice.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent  {
  @Input() myText = "products";
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
