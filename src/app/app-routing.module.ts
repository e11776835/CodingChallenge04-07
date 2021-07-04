import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchComponent} from './search/search.component';
import {FavsComponent} from './favs/favs.component';

const routes: Routes = [
  {path: 'search', component: SearchComponent},
  {path: 'favs', component: FavsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
