import { CeremonyAvailableStatuses } from '../enum/ceremony-Status';
import { DropDown } from '../interfaces/dropdown.interface';

export const DEFAULT_STATUS = CeremonyAvailableStatuses.available;
export const DEFAULT_STATUS_OPTIONS: DropDown[] = [
  { name: 'Available', value: CeremonyAvailableStatuses.available },
  { name: 'Away', value: CeremonyAvailableStatuses.away },
  { name: 'Offline', value: CeremonyAvailableStatuses.offline },
];
