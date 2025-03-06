import { Component } from '@angular/core';
import { ELEMENTDATA } from '../../constants/ELEMENT-DATA';

@Component({
  selector: 'feed-record-table',
  templateUrl: './feed-record-table.component.html',
  styleUrls: ['./feed-record-table.component.scss']
})
export class FeedRecordTableComponent {

 

   refeicoes = [
    { nome: 'Café da manhã', alimentos: [
      { alimento: 'Ovo', quantidade: '2 unidades', calorias: 150, datahora: new Date() },
      { alimento: 'Pão', quantidade: '1 unidade', calorias: 100, datahora: new Date() }
    ]},
    { nome: 'Almoço', alimentos: [
      { alimento: 'Arroz', quantidade: '100g', calorias: 130, datahora: new Date() },
      { alimento: 'Feijão', quantidade: '50g', calorias: 80, datahora: new Date() }
    ]},
    { nome: 'Jantar', alimentos: [
      { alimento: 'Salada', quantidade: '200g', calorias: 90, datahora: new Date() },
      { alimento: 'Frango', quantidade: '150g', calorias: 200, datahora: new Date() }
    ]},
    { nome: 'Lanches', alimentos: [
      { alimento: 'Maçã', quantidade: '1 unidade', calorias: 193, datahora: new Date() }
    ]}
  ];


  // Unifica todos os alimentos em um único array
  alimentosUnificados = this.refeicoes.flatMap(refeicao => refeicao.alimentos);

  // Modos de exibição
  modosVisualizacao = [
    { value: 'tabela', viewValue: 'Tabela Completa' },
    { value: 'separado', viewValue: 'Separado por Refeições' }
  ];
  
  modoVisualizacao: string = 'tabela'; // Padrão
  atualizarModo(modo: string) {
    this.modoVisualizacao = modo;
  }


  totalKcalRefeicao = 100;
}
