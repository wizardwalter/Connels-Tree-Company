import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(public http: HttpClient, public router: Router) { }

  baseUrl = "http://localhost:8080/"


  sendNodeMailer(emailObj:any): Observable<any> {
    return this.http.post(this.baseUrl + 'email/nodemailer', emailObj)
  }

}
