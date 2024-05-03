import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {NgOptimizedImage, provideImgixLoader} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    provideImgixLoader('https://apalayret.github.io/animation-mariage-boubou/'),
  ],
})
export class AppComponent {
  title = 'couple-or';
  public isStyleClassic = false;

  public changeStyle(): void {
    this.isStyleClassic = !this.isStyleClassic;
  }
}
