import {
  Directive,
  ElementRef,
  HostBinding,
  Input,
  OnChanges,
  OnInit,
  SecurityContext,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnChanges, OnInit {
  @Input('appHighlight') searchTerm: string = '';
  @Input() caseSensitive: boolean = false;
  @Input() customClass: string = '';
  @HostBinding('innerHTML') innerHTML: string = '';
  text: string = '';

  constructor(private elRef: ElementRef, private sanitizer: DomSanitizer) {}

  ngOnChanges() {
    if (this.searchTerm == '') {
      this.innerHTML = this.sanitizeText(this.text);
      return;
    }

    const regex = new RegExp(this.searchTerm, this.caseSensitive ? 'g' : 'gi');
    const result = this.text.replace(regex, (match: string) => {
      return `<mark class="${this.customClass}">${match}</mark>`;
    });
    this.innerHTML = this.sanitizeText(result);
  }

  sanitizeText(data: string): string {
    return this.sanitizer.sanitize(SecurityContext.HTML, data) ?? '';
  }

  ngOnInit() {
    this.text = this.elRef.nativeElement.textContent;
    this.innerHTML = this.sanitizeText(this.text);
  }
}
