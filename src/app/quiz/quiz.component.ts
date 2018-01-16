import { Component, OnInit } from '@angular/core';
import { Harmony } from '../harmony';
import { ToggleChunkComponent } from '../toggle-chunk/toggle-chunk.component';
import { ViewChild } from '@angular/core';
import { ViewChildren } from '@angular/core';
import { QueryList } from '@angular/core';
import { ToggleChunk } from '../toggle-chunk/toggle-chunk';
import { chunks } from '../toggle-chunk/chunks';
import { tasks } from '../task/tasks';
import { Task } from '../task/task';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent {
  task: Task;
  chunks: { [key: string]: ToggleChunk } = chunks;
  tasks = tasks;
  public showSettings = false;

  constructor(public harmony: Harmony) {
  }

  isActive(task) {
    return this.task === task;
  }

  setTask(task) {
    this.task = task;
    task.ask();
  }

}
