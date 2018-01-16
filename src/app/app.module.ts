import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Harmony } from './harmony';
import { QuizComponent } from './quiz/quiz.component';
import { ToggleChunkComponent } from './toggle-chunk/toggle-chunk.component';
import { TaskComponent } from './task/task.component';


@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    ToggleChunkComponent,
    TaskComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [Harmony],
  bootstrap: [AppComponent]
})
export class AppModule { }
