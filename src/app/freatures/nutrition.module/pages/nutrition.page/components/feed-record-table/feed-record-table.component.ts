import { Component } from '@angular/core';
import { ELEMENTDATA } from '../../constants/ELEMENT-DATA';

@Component({
  selector: 'feed-record-table',
  templateUrl: './feed-record-table.component.html',
  styleUrls: ['./feed-record-table.component.scss']
})
export class FeedRecordTableComponent {
  displayedColumns: string[] = ['alimento', 'quantidade', 'calorias','datahora'];
  dataSource = ELEMENTDATA;
}
