import { SeniorityStatuses } from '../enum/seniority-status';
import { DropDown } from '../interfaces/dropdown.interface';

//CONST
export const collectionOfSenirity: DropDown[] = [
  { value: SeniorityStatuses.trainne, name: 'Trainne' },
  { value: SeniorityStatuses.semiSenior, name: 'Semi-Senior' },
  { value: SeniorityStatuses.senior, name: 'Senior' },
  { value: SeniorityStatuses.expert, name: 'Expert' },
];
