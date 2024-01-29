import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

// eslint-disable-next-line max-len
import { DialogInscriptionComponent } from 'app/dialog/dialog-inscription/dialog-inscription.component';

const MODULES: any[] = [
  CommonModule,
  MatButtonModule,
  MatTooltipModule,
  MatIconModule,
];
const SERVICES: any[] = [];

@Component({
  selector: 'app-team-card',
  standalone: true,
  imports: [MODULES],
  templateUrl: './team-card.component.html',
  styleUrl: './team-card.component.scss',
  providers: [SERVICES],
})
export class TeamCardComponent {
  @Input() teamData!: any;

  dialogInscriptionForm!: MatDialogRef<DialogInscriptionComponent>;

  constructor(private dialog: MatDialog) {}

  openModal(teamId: number) {
    this.dialogInscriptionForm = this.dialog.open(DialogInscriptionComponent, {
      width: '640px',
      disableClose: true,
      data: {
        teamId,
      },
    });

    this.dialogInscriptionForm.afterClosed().subscribe(response => {
      //  if (resCode === KeyName.change_customer_status) {
      //    let bodyParams = {
      //      status: nextStatus,
      //    };
      //    this.updateCustomer(customer.id, bodyParams);
      //  }
    });
  }
}
