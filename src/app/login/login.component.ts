import { Component} from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';
import { GlobalService } from '../global.service';
import { Router,CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  message :any;
  public name="form";
  constructor(private global:GlobalService,private router:Router,private fb:FormBuilder){}
  
  profileForm = this.fb.group({
    email:['',Validators.required],
    password:['',Validators.required],

  });
  onSubmit(){
    this.global.get('https://api.myjson.com/bins/8apaq').subscribe(result=>{
      let res:any = result;
      if(this.profileForm.controls.email.value === res.userDetails[0].email && 
        this.profileForm.controls.password.value === res.userDetails[0].password)
        {
          localStorage.setItem('userDetails',JSON.stringify(res.userDetails[0]))
          localStorage.setItem('isLoggedIn','true');
          this.router.navigate(['/dashboard'])
        }
        else
        {
          this.message = "Email and Password Wrong";
        }
    });
}

}
