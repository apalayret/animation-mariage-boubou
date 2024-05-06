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
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
  providers: [
    provideImgixLoader(isDevMode() ? 'http://localhost:4200/' : 'https://apalayret.github.io/animation-mariage-boubou/'),
  ],
})
export class WelcomeComponent {
  public firstQuestion: number = datas.find(question => question.nextQuestion && !datas.find(q => q.nextQuestion === question.id))?.id ?? 0;

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    switch (event.code) {
      case KeyCode.ENTER:
      case KeyCode.NUMPAD_ENTER:
      case KeyCode.ARROW_RIGHT:
        this.router.navigate(['/question', this.firstQuestion]);
        break;
    }
  }

  constructor(private router: Router) {
  }
}
