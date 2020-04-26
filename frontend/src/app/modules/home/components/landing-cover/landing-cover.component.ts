import { Component, OnInit } from '@angular/core';
declare var particlesJS: any;

@Component({
  selector: 'app-landing-cover',
  templateUrl: './landing-cover.component.html',
  styleUrls: ['./landing-cover.component.css']
})
export class LandingCoverComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    particlesJS.load('particles-js', 'assets/data/particles.json', null);
  }

}
