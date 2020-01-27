import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { TodoService } from "../../services/todo.service";
import { Todo } from "src/app/models/Todo";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.css"]
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) {}

  ngOnInit() {}

  // set dynamic classes
  setClasses() {
    let classes = {
      todo: true,
      completed: this.todo.completed
    };
    return classes;
  }

  toggle(todo) {
    // Toggle in UI
    todo.completed = !todo.completed;
    // Toggle on Server
    this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo));
  }

  delete(todo) {
    this.deleteTodo.emit(todo);
    console.log('del');
  }
}
