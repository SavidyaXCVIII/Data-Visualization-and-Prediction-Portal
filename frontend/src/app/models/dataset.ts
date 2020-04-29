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
  passed_all: number;
  passed_all_subject_perc: number;
  failed_all: number;
  failed_all_subject_perc: number;
}

export interface DataModel {
  District: string;
  number_sat: number;
  passed_all: number;
  passed_all_subject_perc: number;
  failed_all: number;
  failed_all_subject_perc: number;
}