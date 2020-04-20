import { CommonModule } from '@angular/common';
import { GamesListComponent } from './components/games-list/games-list/games-list.component';
import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';

const COMPONENTS = [
  GamesListComponent
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    COMPONENTS
  ],
})
export class SharedModule { }
