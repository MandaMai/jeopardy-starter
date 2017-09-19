import { Component, OnInit } from '@angular/core';
import {JeopardyService } from './jeopardy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Jeopardy';

  questionInfo;
  userScore: number =0;
  userAnswer: string;

  constructor(private jeopardyService: JeopardyService){}

  // populating questionInfo 
  getDataFromService(){
    this.jeopardyService.getQuestionInfo()
      .subscribe(
        questionInfo => {
          this.questionInfo = questionInfo[0];
          console.log(this.questionInfo.answer)
        }
      )
  }

  checkAnswer() {
    console.log(this.userAnswer)
    if(this.userAnswer == this.questionInfo.answer) {
      this.userScore += this.questionInfo.value;
      this.userAnswer="";
    }//update user score if answer is correct
    this.getDataFromService();//get new question
  }

 

  ngOnInit(){
    // get question data when page is loaded
    this.getDataFromService()
  }


}
