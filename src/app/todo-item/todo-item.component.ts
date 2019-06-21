import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from "src/app/interface/todo";
@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() checkedItem = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  doneEdit(todo: Todo): void {
    this.checkedItem.emit(todo);
  }

}
