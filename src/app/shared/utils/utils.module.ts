import { NgModule } from "@angular/core";
import { AngularMaterialModule } from "../angular-material/angular-material.module";
import { UniversalSelectComponent } from './components/universal-select/universal-select.component';


@NgModule({
  imports: [
    AngularMaterialModule
],
  exports: [
    UniversalSelectComponent
  ],
  declarations: [
    UniversalSelectComponent
  ]
})
export class UtilsModule {

}