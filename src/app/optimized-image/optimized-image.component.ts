import { CommonModule, provideImgixLoader } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-optimized-image',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  providers: [provideImgixLoader('https://hoshima.imgix.net/')],
  template: ` <img ngSrc="ei.jpg" width="1024" height="768" priority /> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OptimizedImageComponent {}
