import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor( public router: Router) { }

  ngOnInit(): void {
  }

  async clicked(){
    await document.getElementById("saw").classList.remove('saw-no');
    await document.getElementById("saw").classList.add('saw-yes');
    await setTimeout(()=>document.getElementById('my-animation').classList.add('hinge'), 1500)
    await setTimeout(()=>this.router.navigateByUrl('/home'), 3500)

  }

}
