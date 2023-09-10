import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() bodyRef!: TemplateRef<any>;
  @Input() cols: any[] = [];
  @Input() rowData: any[] = [];

  constructor() {}

  ngOnInit(): void {


  }
}
