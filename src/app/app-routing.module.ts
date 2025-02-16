import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingModuleComponent } from './freatures/training.module/training.module.component';
import { NutritionPageComponent } from './freatures/nutrition.module/pages/nutrition.page/nutrition.page.component';

const routes: Routes = [
  {path:'nutrition', component: NutritionPageComponent},
  {path:'training', component: TrainingModuleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//