import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]',
})
export class BasicHighlightDirective implements OnInit {
  // Constructor with arguments
  constructor(private elementRef: ElementRef) {}

  // Hooks
  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }

  // Methods
}
