import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'not-optimized',
    loadComponent: () =>
      import('./not-optimized-image/not-optimized-image.component'),
  },
];
