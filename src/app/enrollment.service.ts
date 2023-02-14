import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
url='http://localhost:3000/enroll';
  constructor(private http:HttpClient) { }

  enroll(user:any){
     return this.http.post<any>(this.url,user)
  }
}
