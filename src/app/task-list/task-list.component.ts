import { Component, OnInit } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.less']
})
export class TaskListComponent implements OnInit {

  faCheck = faCheck;

  public taskList: Array<Task> = [new Task("a"), new Task("b")]

  constructor() { }

  ngOnInit(): void {
  }

  toggleDone(task: Task){
    task.done = !task.done;
  }
}

class Task {

  public text: string;

  public done: boolean;

  constructor(text: string) { 
    this.text = text;
    this.done = true;
  }
}