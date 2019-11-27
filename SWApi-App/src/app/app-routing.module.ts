import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PeoplesComponent } from './peoples/peoples.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PeopleDetailComponent } from './people-detail/people-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'peoples', component: PeoplesComponent },
  { path: 'dashboard', component: DashboardComponent },  
  { path: 'detail/:id', component: PeopleDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }