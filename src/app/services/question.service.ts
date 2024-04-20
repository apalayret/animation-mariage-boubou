import { Injectable } from '@angular/core';
import {Observable, ReplaySubject} from "rxjs";
import {QuestionAnswers} from "../datas/questions-reponses";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private pendingQuestion = new ReplaySubject<QuestionAnswers>(1);

  constructor() { }

  public getQuestion$(): Observable<QuestionAnswers> {
    return this.pendingQuestion.asObservable();
  }

  public nextQuestion(question: QuestionAnswers): void {
    this.pendingQuestion.next(question)
  }
}
