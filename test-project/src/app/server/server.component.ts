import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss'],
})
export class ServerComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  @Input() name = '';
  constructor() {
    console.log('This is constructor');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('This is onChanges', changes);
  }
  ngOnInit() {
    console.log('This is onInit');
  }
  ngDoCheck() {
    console.log('This is doCheck');
  }
  ngAfterContentInit() {
    console.log('This is afterContentInit');
  }
  ngAfterContentChecked() {
    console.log('This is afterContentChecked');
  }
  ngAfterViewInit() {
    console.log('This is afterViewInit');
  }
  ngAfterViewChecked() {
    console.log('This is afterViewChecked');
  }
  ngOnDestroy() {
    console.log('This is onDestroy');
  }
}
