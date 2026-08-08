import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  newTodoText: string = '';
  todos: string[] = [];

  addTodo() {
    if (this.newTodoText.trim()) {
      this.todos.push(this.newTodoText.trim());
      this.newTodoText = '';
    }
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }
}