import {Component, HostListener, isDevMode, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {Answer, datas, QuestionAnswers} from "../../datas/questions-reponses";
import {AnswerComponent} from "./answer/answer.component";
import {ScoreService} from "../../services/score.service";
import {NgClass, NgOptimizedImage, provideImgixLoader} from "@angular/common";
import {QuestionService} from "../../services/question.service";
import {KeyCode} from "../../KeyCode.utils";

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [
    AnswerComponent,
    RouterLink,
    NgOptimizedImage,
    NgClass
  ],
  providers: [
    provideImgixLoader(isDevMode() ? 'http://localhost:4200/' : 'https://apalayret.github.io/animation-mariage-boubou/'),
  ],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss'
})
export class QuestionComponent implements OnInit {
  public question: QuestionAnswers | undefined;
  public isAnswerCorrect: boolean[] = [];
  public isAnswerShown: boolean[] = [];

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    switch (event.code) {
      case KeyCode.NUMPAD_0:
        this.showAllAnswers();
        break;
      case KeyCode.NUMPAD_1:
      case KeyCode.NUMPAD_2:
      case KeyCode.NUMPAD_3:
      case KeyCode.NUMPAD_4:
      case KeyCode.NUMPAD_5:
      case KeyCode.NUMPAD_6:
      case KeyCode.NUMPAD_7:
      case KeyCode.NUMPAD_8:
      case KeyCode.NUMPAD_9:
        this.showAnswer(+event.code.match(/\d+/)![0] - 1);
        break;
    }
  }

  constructor(private route: ActivatedRoute,
              private router: Router,
              private questionService: QuestionService,
              private scoreService: ScoreService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.question = datas.find(questionAnswer => questionAnswer.id === +params['id']);
      if (!this.question) {
        this.router.navigate(['/welcome']);
        return;
      }
      this.isAnswerCorrect = Array(this.question.answers.length + 1).fill(false);
      this.isAnswerShown = Array(this.question.answers.length + 1).fill(false);
      this.question.answers.sort(((answerA, answerB) => answerA.percentage < answerB.percentage ? 1 : -1));
      this.questionService.nextQuestion(this.question);
      this.scoreService.resetErrors();
    });

    this.questionService.askForAnswer$.subscribe(() => {
      this.showAllAnswers();
    })
  }

  public showAnswer(number: number): void {
    const answer = this.question?.answers?.at(number);
    if (answer && !this.isAnswerShown[number]) {
      this.isAnswerCorrect[number] = true;
      this.isAnswerShown[number] = true;
      this.scoreService.addToScore(answer.percentage);
    }
  }

  public showAllAnswers(): void {
    this.isAnswerShown = this.isAnswerShown.map(() => true);
  }

  getClassCurlicue(modulo: number, result: number) {
    const resultTest = (((this.question?.id ?? 0) % modulo) === result);
    return {
      'hide': !resultTest,
      'fade-in': resultTest,
      'curlicue': true
    }
  }
}
