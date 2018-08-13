import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Layouts
import { SimpleLayoutPage } from './pages/layouts/simple-layout';

//Pages
import { HotelSearch } from './pages/hotel-search/hotel-search';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'hotel-search',
    pathMatch: 'full',
  },
  {
    path: '',
    component: SimpleLayoutPage,
    children: [
      {
        path: 'hotel-search',
        component: HotelSearch
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
