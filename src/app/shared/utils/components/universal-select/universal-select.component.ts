import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'universal-select',
  templateUrl: './universal-select.component.html',
  styleUrls: ['./universal-select.component.scss']
})
export class UniversalSelectComponent {

  @Input() label: string = 'Selecione';
  @Input() options: { value: any; viewValue: string }[] = []; 
  @Output() valueChange = new EventEmitter<any>(); 

  onChange(value: any) {
    this.valueChange.emit(value); 
  }
}
