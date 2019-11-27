import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { People } from '../people';
import { PeopleService }  from '../people.service';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.css']
})
export class PeopleDetailComponent implements OnInit {

  @Input() people: People;

  constructor(
    private route: ActivatedRoute,
    private peopleService: PeopleService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getPeople();
  }
  
  getPeople(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.peopleService.getPeople(id)
      .subscribe(people => this.people = people);
  }

  goBack(): void {
    this.location.back();
  }
    
  /** PUT: update the people on the server */
  //updatePeople (people: People): Observable<any> {
  //  return this.http.put(this.peoplesUrl, people, this.httpOptions)
  //  .pipe(
  //    tap(_ => this.log(`updated people id=${people.id}`)),
  //    catchError(this.handleError<any>('updatePeople'))
  //  );
  //}
    
  //save(): void {
  //  this.peopleService.updatePeople(this.people)
  //    .subscribe(() => this.goBack());
  //}

  //httpOptions = {
  //  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  //};

}
