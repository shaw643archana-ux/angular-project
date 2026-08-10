import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Task {
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

  newTask: string = '';

  tasks: Task[] = [];

  get totalTasks(): number {
    return this.tasks.length;
  }

  get completedTasks(): number {
    return this.tasks.filter(task => task.completed).length;
  }

  get pendingTasks(): number {
    return this.tasks.filter(task => !task.completed).length;
  }

  get progress(): number {

    if (this.totalTasks === 0) {
      return 0;
    }

    return Math.round(
      (this.completedTasks / this.totalTasks) * 100
    );
  }

  addTask(): void {

    const title = this.newTask.trim();

    if (title === '') {
      return;
    }

    this.tasks.push({
      title: title,
      completed: false
    });

    this.newTask = '';
  }

  toggleTask(index: number): void {

    this.tasks[index].completed =
      !this.tasks[index].completed;

  }

  deleteTask(index: number): void {

    this.tasks.splice(index, 1);

  }

}