import { NgModule } from "@angular/core";
import { SideMenuComponent } from "./components/side-menu/side-menu.component";
import { AppRoutingModule } from "../app-routing.module";

@NgModule({
    imports: [AppRoutingModule],
    exports:[SideMenuComponent],
    declarations:[SideMenuComponent]
})

export class CoreModule {}