import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-form';
  topics=['react','angular','vue'];
  userModel= {
    username: "",
    age: 0,
    email: "",
  };

  constructor(private enrollmentService:EnrollmentService){}
  onSubmit(){
    this.enrollmentService.enroll(this.userModel).subscribe(
      val=>console.log('success',val),
      err=>console.log('error',err)
      )
  }
}
