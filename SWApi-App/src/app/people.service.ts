import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { People } from './people';
import { PEOPLES } from './mock-peoples';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  
  private peoplesUrl = 'https://swapi.co/api/people/';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
  ) { }

  /** GET peoples from the server */  
  getPeoples(): Observable<People[]> {
    return this.http.get<People[]>(this.peoplesUrl)
      .pipe(
        tap(_ => this.log('fetched peoples')),
        catchError(this.handleError<People[]>('getPeoples', []))
      );

  }

  /** GET people by id. Will 404 if id not found */
  getPeople(id: number): Observable<People> {
    const url = `${this.peoplesUrl}/${id}`;
    return this.http.get<People>(url)
      .pipe(
        tap(_ => this.log(`fetched people id=${id}`)),
        catchError(this.handleError<People>(`getPeople id=${id}`))
    );
  }

    /** GET people by id. Return `undefined` when id not found */
    getPeopleNo404<Data>(id: number): Observable<People> {
      const url = `${this.peoplesUrl}/?id=${id}`;
      return this.http.get<People[]>(url)
        .pipe(
          map(peoples => peoples[0]), // returns a {0|1} element array
          tap(h => {
            const outcome = h ? `fetched` : `did not find`;
            this.log(`${outcome} people id=${id}`);
          }),
          catchError(this.handleError<People>(`getPeople id=${id}`))
        );
    }

  /* GET peoples whose name contains search term */
  searchPeoples(term: string): Observable<People[]> {
    if (!term.trim()) {
      // if not search term, return empty people array.
      return of([]);
    }
    return this.http.get<People[]>(`${this.peoplesUrl}/?name=${term}`)
      .pipe(
        tap(_ => this.log(`found peoples matching "${term}"`)),
        catchError(this.handleError<People[]>('searchPeoples', []))
      );
  }  
  
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
      
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a PeopleService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`PeopleService: ${message}`);
  }
  
}
