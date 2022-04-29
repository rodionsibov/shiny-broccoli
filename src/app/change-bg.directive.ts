import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appChangeBg]',
})
export class ChangeBgDirective {
  @Input() isCorrect: boolean = false;

  constructor(private el: ElementRef, private render: Renderer2) {}

  @HostListener('click') answer() {
    if (this.isCorrect) {
      this.render.setAttribute(
        this.el.nativeElement,
        'class',
        'card text-white bg-success'
      );
    } else {
      this.render.setAttribute(
        this.el.nativeElement,
        'class',
        'card text-white bg-warning'
      );
    }
  }
}
