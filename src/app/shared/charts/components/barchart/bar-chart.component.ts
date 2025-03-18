import { Component } from '@angular/core';

@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent {

  caloriasPorDia = [
    { name: 'Seg', value: 1800 },
    { name: 'Ter', value: 2200 },
    { name: 'Qua', value: 2000 },
    { name: 'Qui', value: 2500 },
    { name: 'Sex', value: 2300 },
    { name: 'Sáb', value: 2700 },
    { name: 'Dom', value: 1900 }
  ];
  
colorScheme = 'cool'; 

customColorScheme: any = {
  name: 'customScheme',
  selectable: true,
  group: 'Ordinal',
  domain: ['#02BCFF']
};
 
}    
