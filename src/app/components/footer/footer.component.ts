import {Component, OnInit} from '@angular/core';
import {NgOptimizedImage, provideImgixLoader} from "@angular/common";
import {QuestionService} from "../../services/question.service";
import {datas, Errors, QuestionAnswers} from "../../datas/questions-reponses";
import {ScoreService} from "../../services/score.service";
import {RouterLink} from "@angular/router";

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
    provideImgixLoader('https://apalayret.github.io/animation-mariage-boubou/'),
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

  constructor(private questionService: QuestionService, private scoreService: ScoreService) { }

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
}
