import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from './primeng/primeng.module';
import { ButtonComponent } from './components/button/button.component';
import { TableComponent } from './components/table/table.component';



@NgModule({
  declarations: [
    ButtonComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
  ],
  exports: [
    ButtonComponent,
    TableComponent
  ]
})
export class SharedModule { }
