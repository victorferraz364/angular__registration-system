import { NgModule } from "@angular/core";
import { SideMenuComponent } from "./components/side-menu/side-menu.component";
import { AppRoutingModule } from "../app-routing.module";
import { HeaderGlobalComponent } from './components/header-global/header-global.component';

@NgModule({
    imports: [AppRoutingModule],
    exports:[
        SideMenuComponent,
        HeaderGlobalComponent
],
    declarations:[
        SideMenuComponent, 
        HeaderGlobalComponent
    ]
})

export class CoreModule {}