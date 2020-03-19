import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material-module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from '../header/header.component';
import { AppPipePipe } from '../app-pipe.pipe';
import { ChangeTextDirective } from '../change-text.directive';
import { ChildComponent } from '../child/child.component';
import { Child2Component } from '../child2/child2.component';
import { MyserviceService } from './myservice.service';


@NgModule({
  declarations: [DashboardComponent,HeaderComponent,AppPipePipe,ChangeTextDirective,ChildComponent,Child2Component],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule
  ],
  providers:[MyserviceService]
})
export class DashboardModule { }
