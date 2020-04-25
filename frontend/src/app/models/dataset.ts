export class Dataset {
  id: number;
  datasetName: string;
  publisher: string;
  year: Date;
  releasedDate: Date;
  category: string;
  description: string;
}

export interface DataModel {
  District: string;
  number_sat: number;
}