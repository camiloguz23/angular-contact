import { AbstractControl, ValidationErrors } from '@angular/forms';

export function minAgeValidator(minAge: number) {
  return (control: AbstractControl): ValidationErrors | null => {
    const birthDate = new Date(control.value);
    const today = new Date();

    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      return { minAge: { requiredAge: minAge } };
    }

    return age >= minAge ? null : { minAge: { requiredAge: minAge } };
  };
}
