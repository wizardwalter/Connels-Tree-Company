import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EmailService } from '../service/email.service';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  constructor(public emailService: EmailService) { }
customerForm: any;
status: any;
  ngOnInit(): void {
      this.customerForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      address: new FormControl(''),
      city: new FormControl(''),
      phoneNumber: new FormControl(''),
      typeWork: new FormControl(''),
      comments: new FormControl('')
    });
  }

 onSubmit(){
  this.emailService.sendNodeMailer(this.customerForm.value).subscribe(async (res)=>{
    await res;
    this.status = res.message
    setTimeout(()=>{this.status = null}, 5000)
  })
}

}

// figure out a way to send this to his email, style clear form on submit and make a success message. Also want to send email to customer that says we recieved your request we will e back to you soon
