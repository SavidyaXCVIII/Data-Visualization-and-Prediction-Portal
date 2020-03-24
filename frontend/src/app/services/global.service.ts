import { Injectable } from '@angular/core';
import {Dataset} from '../models/dataset';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() {}

  dataset = new Dataset();

  getSampleData() {
    return this.dataset;
  }
}
