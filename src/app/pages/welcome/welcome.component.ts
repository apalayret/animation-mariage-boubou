import {Component, isDevMode} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgOptimizedImage, provideImgixLoader} from "@angular/common";

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [
    RouterLink,
    NgOptimizedImage
  ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
  providers: [
    provideImgixLoader(isDevMode() ? 'http://localhost:4200/' : 'https://apalayret.github.io/animation-mariage-boubou/'),
  ],
})
export class WelcomeComponent {

}
