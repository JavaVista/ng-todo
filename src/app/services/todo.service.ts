import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  constructor() {}

  getTodos() {
    return [
      {
        id: 1,
        title: "One Todo",
        completed: true
      },
      {
        id: 2,
        title: "Two Todo",
        completed: true
      },
      {
        id: 3,
        title: "Tres Todo",
        completed: false
      }
    ];
  }
}
