import { Component, OnInit } from '@angular/core';

import { People } from '../people';
import { PEOPLES } from '../mock-peoples';
import { PeopleService} from '../people.service';

@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.css']
})
export class PeoplesComponent implements OnInit {

  peoples: People[];

  selectedPeople: People;

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.getPeoples();
  }  
  
  getPeoples(): void {
    this.peopleService.getPeoples()
      .subscribe(peoples => this.peoples = peoples);
  }

}
