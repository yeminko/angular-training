import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
  RendererStyleFlags2,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'black';
  @Input('appBetterHighlight') defaultBackgroundColor: string = 'transparent';

  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  @HostBinding('style.color') color: string = 'black';

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // this.backgroundColor = this.defaultBackgroundColor;
    // this.color = this.defaultColor;
  }

  @HostListener('click') click(eventData: Event) {
    this.backgroundColor = this.defaultBackgroundColor;
    this.color = this.defaultColor;
  }
}
