import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NutritionPageComponent } from './freatures/nutrition.module/pages/nutrition.page/nutrition.page.component';


const routes: Routes = [
  {path:'nutrition', component: NutritionPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//