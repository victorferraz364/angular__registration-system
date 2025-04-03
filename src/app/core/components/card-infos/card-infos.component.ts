import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-infos',
  templateUrl: './card-infos.component.html',
  styleUrls: ['./card-infos.component.scss']
})
export class CardInfosComponent {

  @Input() title!: string;
   @Input() value?: number;  
   @Input() unit?: string;
   @Input() goal?: string;
   @Input() chartType!: 'bar' | 'pie';
}
