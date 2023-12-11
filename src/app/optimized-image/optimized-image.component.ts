import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-optimized-image',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  template: `
    <img
      ngSrc="./assets/images/ei_compressed.jpg"
      width="1024"
      height="768"
      priority
    />
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OptimizedImageComponent {}
