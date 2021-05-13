import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.show') show: boolean = false;

  @HostListener('click') toggleDropdown() {
    console.log('clicked..');

    this.show = !this.show;
  }
}
