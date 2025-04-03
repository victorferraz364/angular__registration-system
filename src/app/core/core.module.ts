import { NgModule } from "@angular/core";
import { SideMenuComponent } from "./components/side-menu/side-menu.component";
import { AppRoutingModule } from "../app-routing.module";
import { HeaderGlobalComponent } from './components/header-global/header-global.component';
import { CardInfosComponent } from "./components/card-infos/card-infos.component";
import { chartsModule } from "../shared/charts/charts.module";
import { AngularMaterialModule } from "../shared/angular-material/angular-material.module";
import { NgIf } from "@angular/common";

@NgModule({
    imports: [
        AppRoutingModule, 
        chartsModule,
        AngularMaterialModule,
        NgIf
    ],
    exports:[
        SideMenuComponent,
        HeaderGlobalComponent,
        CardInfosComponent
],
    declarations:[
        SideMenuComponent, 
        HeaderGlobalComponent,
        CardInfosComponent
    ]
})

export class CoreModule {}