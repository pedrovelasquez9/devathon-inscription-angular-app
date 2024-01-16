export interface DropDown {
  value: string;
  name: string;
  status?: StatusValues;
}

export enum StatusValues {
  active = 'active',
  archived = 'archived',
  disabled = 'disabled',
  error = 'error',
  ended = 'ended',
}
