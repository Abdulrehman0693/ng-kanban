import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KanbanRoutingModule } from './kanban-routing.module';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    KanbanBoardComponent
  ],
  imports: [
    CommonModule,
    KanbanRoutingModule,
    DragDropModule
  ]
})
export class KanbanModule { }
