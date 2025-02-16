import { NgModule } from "@angular/core";
import { NutritionPageComponent } from './pages/nutrition.page/nutrition.page.component';
import { AngularMaterialModule } from "src/app/shared/angular-material/angular-material.module";

@NgModule({
    imports:[
      AngularMaterialModule
    ],
    exports:[],
    declarations:[
    NutritionPageComponent
  ]
})
export class nutritionModule {
    
}