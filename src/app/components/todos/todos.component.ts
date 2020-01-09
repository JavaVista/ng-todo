import { Component, OnInit } from "@angular/core";

import { Todo } from "../../models/Todo";
import { TodoService } from "../../services/todo.service";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"]
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  constructor(private todoServ: TodoService) {}

  ngOnInit() {
    this.todoServ.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  deleteTodo(todo: Todo) {
    // Remove from UI
    this.todos = this.todos.filter(myTodo => myTodo.id !== todo.id);
    // Remove from Server
    this.todoServ.deleteTodo(todo).subscribe();
  }
}
