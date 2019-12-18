import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DraggableDirective } from './draggable.directive';
import { MovableDirective } from './movable.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DraggableDirective, MovableDirective],
  exports: [DraggableDirective, MovableDirective]
})
export class DraggableModule { }