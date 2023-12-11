import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-not-optimized-image',
  standalone: true,
  imports: [CommonModule],
  template: `<img src="./assets/images/ei.jpg" />`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NotOptimizedImageComponent {}
