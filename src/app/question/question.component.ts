import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {
  name: string = '';
  questionList: any = [];
  currentQuestion: number = 0;
  points: number = 0;
  counter: number = 60;

  constructor(private questionService: QuestionService) {}

  ngOnInit(): void {
    this.name = localStorage.getItem('name')!;
    this.getAllQuestions();
  }

  getAllQuestions(): void {
    this.questionService.getQuestion().subscribe((res: any) => {
      this.questionList = res.questions;
    });
  }

  nextQuestion(): void {
    this.currentQuestion++;
  }

  previousQuestion(): void {
    this.currentQuestion--;
  }

  

}
