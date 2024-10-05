import { Routes } from '@angular/router';
import { HomeComponent, ListComponent } from './pages';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'list',
    component: ListComponent,
  },
];
