import { NgModule } from "@angular/core";
import { NutritionPageComponent } from './pages/nutrition.page/nutrition.page.component';
import { AngularMaterialModule } from "src/app/shared/angular-material/angular-material.module";
import { FeedRecordTableComponent } from './pages/nutrition.page/components/feed-record-table/feed-record-table.component';
import { CommonModule, DatePipe } from "@angular/common";
import { UtilsModule } from "src/app/shared/utils/utils.module";
import { HeaderGlobalComponent } from "src/app/core/components/header-global/header-global.component";
import { CoreModule } from "src/app/core/core.module";



@NgModule({
  imports: [
    AngularMaterialModule,
    DatePipe,
    UtilsModule,
    CommonModule,
    CoreModule
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