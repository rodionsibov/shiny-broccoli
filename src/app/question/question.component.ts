import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
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
  correctAnswer: number = 0;
  inCorrectAnswer: number = 0;
  interval$: any;

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

  answer(currentQuestion: number, option: any): void {
    if (option.correct) {
      this.points += 10;
      this.correctAnswer++;
      this.currentQuestion++;
    } else {
      this.points -= 10;
      this.inCorrectAnswer++;
      this.currentQuestion++;
    }
  }

  startCounter(): void {
    this.interval$ = interval(1000).subscribe((val) => {
      this.counter--;
      if (this.counter === 0) {
        this.currentQuestion++;
        this.counter = 60;
        this.points -= 10;
      }
    });
    setTimeout(() => {
      this.interval$.unsubscribe();
    }, 600000);
  }

  stopCounter(): void {
    this.interval$.unsubscribe();
    this.counter = 0;
  }

  resetCounter(): void {
    this.stopCounter();
    this.counter = 60;
    this.startCounter();
  }
}
