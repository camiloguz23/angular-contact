import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone',
  standalone: true,
})
export class PhonePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;

    const cleanValue = value.replace(/\D/g, '');

    if (cleanValue.length === 10) {
      return `(${cleanValue.slice(0, 3)}) ${cleanValue.slice(
        3,
        6
      )}-${cleanValue.slice(6)}`;
    } else if (cleanValue.length === 7) {
      return `${cleanValue.slice(0, 3)}-${cleanValue.slice(3)}`;
    }

    return value;
  }
}
