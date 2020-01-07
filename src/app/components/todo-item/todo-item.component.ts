import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { TodoService } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor(private todoServ: TodoService) { }

  ngOnInit() {
  }

  // set dynamic classes
  setClasses() {
    let classes = {
      todo: true,
      completed: this.todo.completed
    }
    return classes;
  }

  toggle(todo) {
    // Toggle in UI
    todo.completed = !todo.completed;
    // Togle on Server
    this.todoServ.toggleCompleted(todo).subscribe(todo =>
      console.log(todo));
  }

  delete(todo) {
    console.log('del');
  }

}
