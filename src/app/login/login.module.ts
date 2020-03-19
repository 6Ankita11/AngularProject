import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule} from '@angular/forms';
import { GlobalService } from '../global.service';
import { MaterialModule } from '../material-module';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers:[GlobalService]
})
export class LoginModule { }
