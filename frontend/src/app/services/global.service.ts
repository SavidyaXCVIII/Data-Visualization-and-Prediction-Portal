import { Injectable } from '@angular/core';
import {Dataset} from '../models/dataset';
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() {}

  dataset = new Dataset();
  user = new User();

  getSampleData() {
    return this.dataset;
  }
}
