import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { Hero } from '../hero';
import  { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  heroes$!: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor (private heroService: HeroService) {}

  //below pushes search tetm into an "Observable stream"??
  search(term: string): void {
    this.searchTerms.next(term);

  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      debounceTime(300), // wait 300ms after each keystroke before considering the term
      distinctUntilChanged(), //ignores new terms if they are the same as previous terms
      switchMap((term: string) => this.heroService.searchHeroes(term)), // switch to new search observable each time the term changes; makes sure that only the response from most recent request is sent back
    );
    
  }

}
