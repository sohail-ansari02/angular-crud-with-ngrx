import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  cols: any[] = [];
  cars: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' },
    ];
    this.cars = [
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
