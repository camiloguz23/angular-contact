import { Component, inject, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  minAgeValidator,
  SelectOption,
  selectsData,
  UserListService,
} from '../../../../../shared';
import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ui-form',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './ui-form.component.html',
  styleUrl: './ui-form.component.css',
})
export class UiFormComponent implements OnInit {
  private userService = inject(UserListService);
  private route = inject(Router);
  sexoption: SelectOption[] = selectsData.sex;
  countryoption: SelectOption[] = selectsData.country;
  deparmentoption: SelectOption[] = selectsData.deparment;
  cityoption: SelectOption[] = selectsData.city;

  form = new FormGroup({
    sex: new FormControl(''),
    brithdayDate: new FormControl('', [
      Validators.required,
      minAgeValidator(18),
    ]),
    name: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    Deparment: new FormControl(''),
    City: new FormControl('', Validators.required),
    comment: new FormControl('', Validators.required),
  });

  showDeparmentSelect = false;

  constructor() {
    this.form.get('country')?.valueChanges.subscribe((selectedCountry) => {
      this.showDeparmentSelect = selectedCountry === 'Colombia';
      if (!this.showDeparmentSelect) {
        this.form.get('Deparment')?.reset();
      }
    });
  }

  ngOnInit(): void {
    this.userService.loadUsers();
  }

  onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.userService.addUser({
        addres: this.form.get('address')?.value ?? '',
        City: this.form.get('City')?.value ?? '',
        comment: this.form.get('comment')?.value ?? '',
        country: this.form.get('country')?.value ?? '',
        date_birthday: this.form.get('brithdayDate')?.value ?? '',
        Deparment: this.form.get('Deparment')?.value ?? '',
        email: this.form.get('email')?.value ?? '',
        last_name: this.form.get('lastName')?.value ?? '',
        id: 6,
        name: this.form.get('name')?.value ?? '',
        sex: this.form.get('sex')?.value ?? '',
      });
      console.log(this.form.value);
      this.route.navigate(['/list']);
    }
  }

  validationField(
    field?:
      | 'brithdayDate'
      | 'name'
      | 'lastName'
      | 'email'
      | 'address'
      | 'country'
      | 'Deparment'
      | 'City'
      | 'comment'
      | 'sex'
  ) {
    return {
      isrequerid:
        this.form.get(field!)?.touched &&
        this.form.get(field!)?.hasError('required'),
      minAge:
        this.form.get(field!)?.touched &&
        this.form.get(field!)?.hasError('minAge'),
    };
  }
}
