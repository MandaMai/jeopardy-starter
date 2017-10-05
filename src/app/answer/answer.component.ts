import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  userScore: number = 0;
  userAnswer: string;
  @Input() questionInfo;
  @Output() finishedCheckingAnswer = new EventEmitter<void>(); 

  constructor() { }

  ngOnInit() {
  }

    cleanAnswer(tempAnswer) : string {
    console.log(tempAnswer)
    tempAnswer=tempAnswer.replace(/<(?:.|\n\i)*?>/gm, '');
    tempAnswer = tempAnswer.replace(/\\/g, "");
    tempAnswer = tempAnswer.replace('"', "");
    tempAnswer = tempAnswer.replace('"', "");
    tempAnswer = tempAnswer.replace('(', "");
    tempAnswer = tempAnswer.replace(')', "");
    tempAnswer = tempAnswer.toLowerCase();
    console.log(tempAnswer)
    return tempAnswer
  }
  checkAnswer(){
    if(this.cleanAnswer(this.userAnswer) == this.cleanAnswer(this.questionInfo.answer)) {
            this.userScore += this.questionInfo.value;
    }
    this.userAnswer = "";
    this.finishedCheckingAnswer.emit();
  }

}
