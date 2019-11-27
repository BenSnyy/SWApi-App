import { InMemoryDbService } from 'angular-in-memory-web-api';
import { People } from './people';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const peoples = [
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    return {peoples};
  }

  // Overrides the genId method to ensure that a people always has an id.
  // If the peoples array is empty,
  // the method below returns the initial number (11).
  // if the peoples array is not empty, the method below returns the highest
  // people id + 1.
  //genId(peoples: People[]): number {
  //  return peoples.length > 0 ? Math.max(...peoples.map(people => people.id)) + 1 : 11;
  //}
}
