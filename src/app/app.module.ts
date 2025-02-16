import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { nutritionModule } from './freatures/nutrition.module/nutrition.module';
import { CoreModule } from './core/core.module';
import { TrainingModuleComponent } from './freatures/training.module/training.module.component';

@NgModule({
  declarations: [
    AppComponent,
    TrainingModuleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    nutritionModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
