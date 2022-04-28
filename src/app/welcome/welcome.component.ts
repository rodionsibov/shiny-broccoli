import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  @ViewChild('name') nameKey!: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  startQuiz(): void {
    localStorage.setItem('name', this.nameKey.nativeElement.value);
  }
}
