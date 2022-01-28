import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks !: Todo[];
  updateRow : any;
  edit = false;

  constructor( private todoService : TodoService ) { 
    this.getTasks();
  }

  ngOnInit(): void {
  }

  
  
  getTasks() {
    this.todoService.getTasks().subscribe( tasks => {
      this.tasks = tasks
    })
  }

  createTask(name: string) {
    var newTask = new Todo();
    newTask = { name, isComplete: false }
    this.todoService.createTask(newTask).subscribe( msg => {
      this.getTasks();
    });
  }

  deleteTask(id?: number) {
    if (id) {
      this.todoService.deleteTask(id).subscribe( msg => {
        this.getTasks();
      })
    }
  }

  updateStatus(task: Todo) {
    var newTask = task;
    newTask.isComplete = !newTask.isComplete;
    this.todoService.updateTask(newTask)?.subscribe( msg => {
      this.getTasks();
    })
  }

  updateTask(task: Todo, name: string){
    this.saveRow();
    task.name = name
    this.todoService.updateTask(task)?.subscribe( msg => {
      this.getTasks();
    })
  }
  
  // set updateRow to the id 
  editRow(id?: number) {
    if (id) {
      this.updateRow = id;
      this.edit = true;
    }
  }

  // set updateRow to 0
  saveRow() {
    this.edit = false;
    this.updateRow = 0;
  }


}
