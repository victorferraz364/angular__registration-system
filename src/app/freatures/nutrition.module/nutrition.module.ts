import { NgModule } from "@angular/core";
import { NutritionPageComponent } from './pages/nutrition.page/nutrition.page.component';
import { AngularMaterialModule } from "src/app/shared/angular-material/angular-material.module";
import { FeedRecordTableComponent } from './pages/nutrition.page/components/feed-record-table/feed-record-table.component';


@NgModule({
  imports: [
    AngularMaterialModule
  ],
  exports: [
    NutritionPageComponent
  ],
  declarations: [
    NutritionPageComponent,
    FeedRecordTableComponent
  ]
})
export class nutritionModule {

}