import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { SobrePage } from './pages/sobre/sobre.page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomePage,
  },
  {
    path: 'sobre',
    component: SobrePage,
  },
];
