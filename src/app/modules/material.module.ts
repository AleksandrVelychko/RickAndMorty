import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';


const MATERIALMODULES = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatCardModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatDialogModule
];

@NgModule({
  imports: [
    ...MATERIALMODULES
  ],
  exports: [
    ...MATERIALMODULES
  ]
})
export class MaterialModule { }
