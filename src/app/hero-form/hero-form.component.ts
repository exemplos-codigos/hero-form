import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';

@Component({
  /* 
    O selector valor do componente de "app-hero-form" 
    significa que você pode inserir este formulário 
    em um modelo pai usando a <app-hero-form> tag.
  */
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() { this.submitted = true; }

  constructor() { }

  ngOnInit(): void {
  }

}
