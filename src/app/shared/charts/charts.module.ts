import { NgModule } from "@angular/core";
import { BarChartComponent } from './components/barchart/bar-chart.component';
import { NgxEchartsModule } from "ngx-echarts";
import { ChartCommonModule, NgxChartsModule } from '@swimlane/ngx-charts';
import { MyPiechartComponent } from "./components/piechart/piechart.component";






@NgModule({
    imports: [
      NgxEchartsModule.forRoot({ echarts: () => import('echarts') }),
      NgxChartsModule,
      ChartCommonModule
    ],
    declarations: [
      MyPiechartComponent,
      BarChartComponent
  
    ],
    exports:[
      MyPiechartComponent,
      BarChartComponent
    ],
})

export class chartsModule {}