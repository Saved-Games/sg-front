import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';

const MATERIAL_MODULES = [
  MatToolbarModule,
  MatMenuModule,
  MatIconModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MATERIAL_MODULES
  ]
})
export class MaterialModule { }
