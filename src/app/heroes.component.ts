import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})

export class HeroesComponent implements OnInit { 
	title = 'Tour of Heroes';
  heroes: Hero[];  
	selectedHero: Hero;

  constructor(private heroService: HeroService, 
              private router: Router) {}

  getHeroes(): void {
    //this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes().then(h => this.heroes = h);
    //this.heroService.getHeroesSlowly().then(h => this.heroes = h);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
