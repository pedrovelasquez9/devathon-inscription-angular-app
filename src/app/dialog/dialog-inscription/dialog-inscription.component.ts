//angular imports
import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

//material imports
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { collectionOfSenirity } from 'app/shared/constant/senirity-contant';
import { DropDown } from 'app/shared/interfaces/dropdown.interface';
// eslint-disable-next-line max-len
import { POST_InscriptionInterface } from 'app/shared/interfaces/post_Inscription.interface';
import { Country } from 'app/shared/models';

//services
import { CountryService } from 'app/services/country.service';

const MODULES: any[] = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
  MatAutocompleteModule,
];

const githubLinkPattern = /^https:\/\/github\.com\/.+$/;

@Component({
  selector: 'app-dialog-inscription',
  standalone: true,
  imports: [MODULES],
  templateUrl: './dialog-inscription.component.html',
  styleUrl: './dialog-inscription.component.scss',
})
export class DialogInscriptionComponent implements OnInit {
  public form!: FormGroup;
  submitted = false;

  collectionOfSeniority: Array<DropDown> = collectionOfSenirity;
  collectionOfCountry: Array<any> = [];
  filteredOfCountry: Array<any> = [];

  @ViewChild('inputCountry') input!: ElementRef<HTMLInputElement>;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private _dialogRef: MatDialogRef<DialogInscriptionComponent>,
    private countryService: CountryService

    //   public dialog: MatDialog
  ) {}
  public ngOnInit(): void {
    //Get list of countries.
    this.countryService.getCountries().subscribe(
      (res: any) => {
        const responseData = <Array<Country>>res;

        // eslint-disable-next-line arrow-body-style
        const resMap = responseData.map(item => {
          return { name: item.name.common, flag: item.flags.svg };
        });

        const sortedArray = resMap.sort((a, b) => {
          const nameA = a.name.toUpperCase();
          const nameB = b.name.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });

        this.collectionOfCountry = sortedArray;
        this.filteredOfCountry = sortedArray;
      },
      (err: any) => {
        console.log('@@@:' + JSON.stringify(err));
      }
    );

    this.form = this.formBuilder.group({
      fullname: [
        '',
        Validators.required,

        //Validators.minLength(6),
        // Validators.maxLength(2000),
      ],
      email: ['', [Validators.required, Validators.email]],
      gitHubUrl: [
        '',
        Validators.required,
        Validators.pattern(githubLinkPattern),
      ],
      stack: ['backend', Validators.required],
      availability: ['si', Validators.required],
      discordUser: ['', Validators.required],
      seniority: ['', Validators.required],
      country: ['', Validators.required],
      jobSearching: ['si', Validators.required],
      quitEvent: ['si', Validators.required],
      acceptTerms: [false, Validators.requiredTrue],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = !this.submitted;

    if (this.form.invalid) {
      this.submitted = !this.submitted;
      this.form.markAllAsTouched();
      this.form.markAsDirty();
      return;
    }

    let bodyParams!: POST_InscriptionInterface;

    bodyParams.teamId = this.data.teamId;
    bodyParams.fullName = this.form.get('fullname')?.value.trim();

    this.createInscription(bodyParams);
  }

  createInscription(_bodyParams: POST_InscriptionInterface) {
    //TODOD: Call service
  }

  filter(): void {
    const filterValue = this.input.nativeElement.value.toLowerCase();
    this.filteredOfCountry = this.collectionOfCountry.filter(o =>
      o.name.toLowerCase().includes(filterValue)
    );
  }

  onClose(): void {
    this._dialogRef.close();
  }
}
