import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
})
export class StudentListComponent implements OnInit {
  cols: any[] = [];
  rowData: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' },
    ];
    this.rowData = [
      {
        vin: 'vin',
        year: '1212',
        brand: 'branc',
        color: 'clr',
      },
      {
        vin: 'vin',
        year: '1212',
        brand: 'branc',
        color: 'clr',
      },
      {
        vin: 'vin',
        year: '1212',
        brand: 'branc',
        color: 'clr',
      },
      {
        vin: 'vin',
        year: '1212',
        brand: 'branc',
        color: 'clr',
      },
      {
        vin: 'vin',
        year: '1212',
        brand: 'branc',
        color: 'clr',
      },
      {
        vin: 'vin',
        year: '1212',
        brand: 'branc',
        color: 'clr',
      },
      {
        vin: 'vin',
        year: '1212',
        brand: 'branc',
        color: 'clr',
      },
      {
        vin: 'vin',
        year: '1212',
        brand: 'branc',
        color: 'clr',
      },
      {
        vin: 'vin',
        year: '1212',
        brand: 'branc',
        color: 'clr',
      },
      {
        vin: 'vin',
        year: '1212',
        brand: 'branc',
        color: 'clr',
      },
      {
        vin: 'vin',
        year: '1212',
        brand: 'branc',
        color: 'clr',
      },
      {
        vin: 'vin',
        year: '1212',
        brand: 'branc',
        color: 'clr',
      },
      {
        vin: 'vin',
        year: '1212',
        brand: 'branc',
        color: 'clr',
      },
      {
        vin: 'vin',
        year: '1212',
        brand: 'branc',
        color: 'clr',
      },
      {
        vin: 'vin',
        year: '1212',
        brand: 'branc',
        color: 'clr',
      },
      {
        vin: 'vin',
        year: '1212',
        brand: 'branc',
        color: 'clr',
      },
      {
        vin: 'vin',
        year: '1212',
        brand: 'branc',
        color: 'clr',
      },
      {
        vin: 'vin',
        year: '1212',
        brand: 'branc',
        color: 'clr',
      },
      {
        vin: 'vin',
        year: '1212',
        brand: 'branc',
        color: 'clr',
      },
      {
        vin: 'vin',
        year: '1212',
        brand: 'branc',
        color: 'clr',
      },
      {
        vin: 'vin',
        year: '1212',
        brand: 'branc',
        color: 'clr',
      },
      {
        vin: 'vin',
        year: '1212',
        brand: 'branc',
        color: 'clr',
      },
      {
        vin: 'vin',
        year: '1212',
        brand: 'branc',
        color: 'clr',
      },
      {
        vin: 'vin',
        year: '1212',
        brand: 'branc',
        color: 'clr',
      },
    ];
  }
}
