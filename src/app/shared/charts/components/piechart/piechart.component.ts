import { Component } from '@angular/core';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss']
})
export class MyPiechartComponent {

  pieChartData = [
    { name: 'agua', value: 100 }
  ];

  view: [number, number] = [150, 150];  // Tamanho do gráfico
  legend: boolean = true;

}
