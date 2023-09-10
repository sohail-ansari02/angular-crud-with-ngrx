import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import {PaginatorModule} from 'primeng/paginator';

@NgModule({
  exports: [TableModule,PaginatorModule],
})
export class PrimengModule {}
