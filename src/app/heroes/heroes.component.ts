import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.getHeroes();
  }


//below works to fetch heroes with getHeroes synchronously; will not work with an async function like API call
getHeroes(): void {
  this.heroService.getHeroes()
  //Observable.subscribe() allowed for an array of heroes to be returned, rather than Observable<Hero[]>. Former won't work asynchronously. Subscribe passes the "emitted array" to the callback and set the component's heroes property
      .subscribe(heroes => this.heroes = heroes);
}
}