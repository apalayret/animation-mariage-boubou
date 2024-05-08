import {Component, HostListener, isDevMode} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {NgOptimizedImage, provideImgixLoader} from "@angular/common";
import {KeyCode} from "../../KeyCode.utils";
import {datas} from "../../datas/questions-reponses";

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [
    RouterLink,
    NgOptimizedImage
  ],
  templateUrl: './finish.component.html',
  styleUrl: './finish.component.scss',
  providers: [
    provideImgixLoader(isDevMode() ? 'http://localhost:4200/' : 'https://apalayret.github.io/animation-mariage-boubou/'),
  ],
})
export class FinishComponent {
  public lastQuestion: number = datas.find(question => !question.nextQuestion)?.id ?? 0;

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    switch (event.code) {
      case KeyCode.ARROW_LEFT:
        this.router.navigate(['/question', this.lastQuestion]);
        break;
    }
  }

  constructor(private router: Router) {
  }
}
