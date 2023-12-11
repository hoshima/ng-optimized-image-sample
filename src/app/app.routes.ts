import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'not-optimized',
    loadComponent: () =>
      import('./not-optimized-image/not-optimized-image.component'),
  },
  {
    path: 'optimized',
    loadComponent: () => import('./optimized-image/optimized-image.component'),
  },
];
