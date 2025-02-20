import {NgFor} from '@angular/common';
import { NgModule } from "@angular/core";
import {FormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

  @NgModule({
    imports: [
      MatDividerModule,
      MatExpansionModule,
      MatTableModule,
      MatSelectModule,
      FormsModule, 
      MatFormFieldModule, 
      NgFor, 
      MatInputModule,
      BrowserAnimationsModule,

    ],
    exports: [
      MatExpansionModule,
      MatTableModule,
      MatDividerModule,
      MatSelectModule,
      FormsModule, 
      MatFormFieldModule, 
      MatInputModule,NgFor
    ],

  })
  export class AngularMaterialModule {}

  