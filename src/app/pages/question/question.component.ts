import {Component, isDevMode, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {Answer, datas, QuestionAnswers} from "../../datas/questions-reponses";
import {AnswerComponent} from "./answer/answer.component";
import {ScoreService} from "../../services/score.service";
import {NgClass, NgOptimizedImage, provideImgixLoader} from "@angular/common";
import {QuestionService} from "../../services/question.service";

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
  public isAnswerShown: boolean = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private questionService: QuestionService,
              private scoreService: ScoreService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.isAnswerShown = false;
      this.question = datas.find(questionAnswer => questionAnswer.id === +params['id']);
      if (!this.question) {
        this.router.navigate(['/welcome']);
        return;
      }
      this.question.answers.sort(((answerA, answerB) => answerA.percentage < answerB.percentage ? 1 : -1));
      this.questionService.nextQuestion(this.question);
      this.scoreService.resetErrors();
    });

    this.questionService.askForAnswer$.subscribe(() => {
      this.showAllAnswers();
    })
  }

  public answerSelected(answer: Answer): void {
    this.scoreService.addToScore(answer.percentage);
  }

  public showAllAnswers(): void {
    this.isAnswerShown = true;
  }

  getClassCurlicue(modulo: number, result: number) {
    const resultTest = (((this.question?.id ?? 0) % modulo) === result);
    return {
      'hide': !resultTest,
      'fade-in': resultTest
    }
  }
}
