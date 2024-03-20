import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';

// eslint-disable-next-line max-len
import { DialogInscriptionComponent } from 'app/dialog/dialog-inscription/dialog-inscription.component';
import { TooltipListPipe } from 'app/shared/pipes';

const MODULES: any[] = [
  CommonModule,
  MatButtonModule,
  MatTooltipModule,
  MatIconModule,
  MatExpansionModule,
];

const PIPES: any[] = [TooltipListPipe];

const SERVICES: any[] = [];

@Component({
  selector: 'app-team-card',
  standalone: true,
  imports: [MODULES, PIPES],
  templateUrl: './team-card.component.html',
  styleUrl: './team-card.component.scss',
  providers: [SERVICES],
})
export class TeamCardComponent {
  @Input() teamData!: any;

  dialogInscriptionForm!: MatDialogRef<DialogInscriptionComponent>;

  panelOpenState = false;

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
