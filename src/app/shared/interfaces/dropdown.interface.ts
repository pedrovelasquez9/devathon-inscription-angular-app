export interface DropDown {
  value: string;
  name: string;
  status?: StatusValues;
}

export enum StatusValues {
  active = 'active',
  diactivated = 'diactivated',
}
