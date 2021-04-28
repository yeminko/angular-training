import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  task: string = '';
  todos: Array<string> = [];
  doneList: Array<string> = [];

  onAddTask() {
    if (this.task == '') return;
    this.todos.push(this.task);
    this.task = '';
  }

  moveToDoneList(task: string) {
    this.todos = this.todos.filter((todo) => todo !== task);
    this.doneList.unshift(task);
  }

  moveToTodos(task: string) {
    this.doneList = this.doneList.filter((todo) => todo !== task);
    this.todos.push(task);
  }
}
