import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PeopleDetailComponent } from './people-detail/people-detail.component';
import { PeoplesComponent } from './peoples/peoples.component';
import { MessagesComponent } from './messages/messages.component';

import { DropdownComponent } from './dropdown/dropdown.component';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
// .


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PeoplesComponent,
    PeopleDetailComponent,
    MessagesComponent,
    
    DropdownComponent,
    SearchComponent,
    ResultsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    //HttpClientInMemoryWebApiModule.forRoot(
    //  InMemoryDataService, { dataEncapsulation: false }
    //)
    NoopAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatInputModule,
    // MatSliderModule,
    // MatSelectModule,
    // MatFormField
  ],
  providers: [], // no need to place any providers due to the `providedIn` flag...
  bootstrap: [AppComponent]
})
export class AppModule { }
