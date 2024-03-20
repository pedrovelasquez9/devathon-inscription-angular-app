import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'tooltipList', standalone: true })
export class TooltipListPipe implements PipeTransform {
  transform(participants: { id: number; name: string }[]): string {
    let list: string = '';

    participants.forEach(participant => {
      list += '• ' + participant.name + '\n';
    });
    return list;
  }
}
