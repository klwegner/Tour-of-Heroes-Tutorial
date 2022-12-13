import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes= [
      {id: 12, name: 'Octodad', specialAttack: 'flail arms', height: 30},
      {id: 13, name: 'IKEA Head', specialAttack: 'weird look', height: 10},
      {id: 14, name: 'Blobby the Blobfish', specialAttack: 'gross feel', height: 3},
      {id: 15, name: 'Lucky Cat', specialAttack: 'wave arm', height: 8},
      {id: 16, name: 'Piece of Paper', specialAttack: 'paper cut', height: 15},
      {id: 17, name: 'Bad Dream', specialAttack: 'uneasy feeling upon waking', height: 0},
      {id: 18, name: 'Trashy the Trash Can', specialAttack: 'eat garbage', height: 30},
      {id: 19, name: 'New SUV', specialAttack: 'high MPG', height: 80},
      {id: 20, name: 'Fish Man', specialAttack: 'dance wildly', height: 80}
    ];
    return {heroes};
  }


  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}