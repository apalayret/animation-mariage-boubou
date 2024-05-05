import {Component, HostListener, isDevMode, OnInit} from '@angular/core';
import {NgOptimizedImage, provideImgixLoader} from "@angular/common";
import {QuestionService} from "../../services/question.service";
import {datas, Errors, QuestionAnswers} from "../../datas/questions-reponses";
import {ScoreService} from "../../services/score.service";
import {Router, RouterLink} from "@angular/router";
import {KeyCode} from "../../KeyCode.utils";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  providers: [
    provideImgixLoader(isDevMode() ? 'http://localhost:4200/' : 'https://apalayret.github.io/animation-mariage-boubou/'),
  ],
})
export class FooterComponent implements OnInit {
  public question: QuestionAnswers | undefined;
  public previousQuestion: number | undefined;
  public get score(): number {
    return this.scoreService.getScore();
  }
  public get errors(): Errors {
    return this.scoreService.getErrors();
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    switch (event.code) {
      case KeyCode.KEY_X:
        this.addError();
        break;
      case KeyCode.ARROW_LEFT:
        this.previous();
        break;
      case KeyCode.ARROW_RIGHT:
        this.next();
        break;
    }
  }

  constructor(private questionService: QuestionService,
              private scoreService: ScoreService,
              private router: Router) { }

  ngOnInit(): void {
    this.questionService.getQuestion$().subscribe(question => {
      this.question = question;
      this.previousQuestion = datas.find(questionAnswer => questionAnswer.nextQuestion === this.question?.id)?.id;
    })
  }

  public addError(): void {
    this.scoreService.addError();
  }

  public askForAnswer() {
    this.questionService.askForAnswer();
  }

  public previous() {
    if (this.previousQuestion) {
      this.router.navigate(['/question', this.previousQuestion]);
    } else {
      this.router.navigate(['/welcome']);
    }
  }

  public next() {
    if (this.question?.nextQuestion) {
      this.router.navigate(['/question', this.question?.nextQuestion]);
    } else {
      this.router.navigate(['end']);
    }
  }
}
