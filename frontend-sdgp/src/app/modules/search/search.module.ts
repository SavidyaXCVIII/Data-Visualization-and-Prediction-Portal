import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchDatasetComponent } from './search-dataset/search-dataset.component';


@NgModule({
  declarations: [SearchDatasetComponent],
  imports: [
    CommonModule,
    SearchRoutingModule
  ]
})
export class SearchModule { }
