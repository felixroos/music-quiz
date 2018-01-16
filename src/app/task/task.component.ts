import { Component, OnInit, Input, ViewChildren, QueryList } from '@angular/core';
import { Task } from './task';
import { ToggleChunkComponent } from '../toggle-chunk/toggle-chunk.component';

@Component({
    selector: 'app-task',
    templateUrl: 'task.component.html'
})
export class TaskComponent implements OnInit {
    @Input() task: Task;
    @ViewChildren(ToggleChunkComponent) chunks: QueryList<ToggleChunkComponent>;
    constructor() { }

    ngOnInit() { }

    nextQuestion() {
        if (this.task) {
            this.task.ask();
            this.chunks.toArray().forEach(component => {
                component.chunk.clear();
            });
        }
    }
}
