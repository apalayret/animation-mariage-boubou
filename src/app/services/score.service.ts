import { Injectable } from '@angular/core';
import {Errors} from "../datas/questions-reponses";

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  private score: number = 0;
  private errors: Errors = [false, false, false];

  constructor() { }

  public getScore(): number {
    return this.score;
  }

  public addToScore(scoreToAdd: number) {
    this.score += scoreToAdd;
  }

  public getErrors(): Errors {
    return [...this.errors];
  }

  public addError(): void {
    this.errors = [true, this.errors[0], this.errors[1]];
  }

  public resetErrors(): void {
    this.errors = [false, false, false];
  }
}
