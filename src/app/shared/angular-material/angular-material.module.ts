import { NgModule } from "@angular/core";
import {MatTableModule} from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';

  @NgModule({
    imports: [
      MatDividerModule,
      MatExpansionModule,
      MatTableModule
    ],
    exports: [
      MatDividerModule,
      MatExpansionModule,
      MatTableModule
    ],

  })
  export class AngularMaterialModule {}

  