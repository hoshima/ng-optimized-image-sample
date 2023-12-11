import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  template: `
    <h1>Welcome to {{ title }}!</h1>
    <a [routerLink]="['/not-optimized']" routerLinkActive="router-link-active"
      >未最適化</a
    >

    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  title = 'ng-optimized-image-sample';
}
