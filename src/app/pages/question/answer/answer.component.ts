import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Answer} from "../../../datas/questions-reponses";

@Component({
  selector: 'app-answer',
  standalone: true,
  imports: [],
  templateUrl: './answer.component.html',
  styleUrl: './answer.component.scss'
})
export class AnswerComponent {
  @Input() answer: Answer | undefined;
  @Input() number: number | undefined;
  @Input() isAnswerCorrect: boolean = false;
  @Input() isAnswerShown: boolean = false;
  @Output() answerSelected: EventEmitter<void> = new EventEmitter();
  public show: boolean = false;

  public showAnswer() {
    if (!this.show && !this.isAnswerShown) {
      this.show = true;
      this.answerSelected.emit();
    }
  }
}
