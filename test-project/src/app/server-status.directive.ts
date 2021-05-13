import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appServerStatus]',
})
export class ServerStatusDirective implements OnInit {
  @HostBinding('style.color') color: string = 'black';
  @HostBinding('style.font-size') fontSize: string = '16px';
  @Input() appServerStatus: string = '';

  constructor() {}

  @HostListener('mouseover') increaseFont() {
    this.fontSize = '25px';
  }

  @HostListener('mouseleave') defaultFont() {
    this.fontSize = '16px';
  }

  ngOnInit() {
    this.color = this.appServerStatus === 'online' ? 'green' : 'red';
  }
}
