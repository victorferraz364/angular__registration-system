import { Component } from '@angular/core';

@Component({
  selector: 'nutrition-page',
  templateUrl: './nutrition.page.component.html',
  styleUrls: ['./nutrition.page.component.scss']
})
export class NutritionPageComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  viewModeList = [
    { value: 'tabela', viewValue: 'Tabela' },
    { value: 'lista', viewValue: 'Lista' }
  ];

  viewMode: string = 'tabela'; 

  atualizarModo(modo: string) {
    this.viewMode = modo;
  }
}
