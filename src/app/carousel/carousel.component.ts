import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, style, animate, animation, useAnimation } from "@angular/animations";
import {
  fadeIn,
  fadeOut,
} from "./carousel.animations";


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  animations: [
    trigger("carouselAnimation", [
      transition("void => *", [useAnimation(fadeIn, {params: { time: '1300ms' }} )]),
      transition("* => void", [useAnimation(fadeOut, {params: { time: '1300ms' }})]),
    ])
  ]
})
export class CarouselComponent implements OnInit {
  @Input() slides: any;
  currentSlide = 0;
  constructor() { }

  ngOnInit(): void {
    setInterval(()=>{
      const next = this.currentSlide + 1;
      this.currentSlide = next === this.slides.length ? 0 : next;
    },4000)
  }
  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;

  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;

  }
}
