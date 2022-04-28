import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  name: string = ''

  constructor() { }

  ngOnInit(): void {
    this.name = localStorage.getItem('name')!
  }

}
