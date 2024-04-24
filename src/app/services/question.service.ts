import { Injectable } from '@angular/core';
import {Observable, ReplaySubject, Subject} from "rxjs";
import {QuestionAnswers} from "../datas/questions-reponses";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private pendingQuestion = new ReplaySubject<QuestionAnswers>(1);
  private _askForAnswer$ = new Subject<void>();

  constructor() { }

  public getQuestion$(): Observable<QuestionAnswers> {
    return this.pendingQuestion.asObservable();
  }

  public nextQuestion(question: QuestionAnswers): void {
    this.pendingQuestion.next(question)
  }

  public askForAnswer(): void {
    this._askForAnswer$.next();
  }

  public get askForAnswer$(): Observable<void> {
    return this._askForAnswer$.asObservable();
  }
}
