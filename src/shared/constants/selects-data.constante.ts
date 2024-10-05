import { keySelect, SelectOption } from '../types';

export const selectsData: Record<keySelect, SelectOption[]> = {
  sex: [
    { name: 'Masculino', value: 'Masculino' },
    { name: 'Femenino', value: 'Femenino' },
  ],
  country: [
    { name: 'Colombia', value: 'Colombia' },
    { name: 'Argentina', value: 'Argentina' },
    { name: 'Mexico', value: 'Mexico' },
  ],
  deparment: [
    { name: 'Amazonas', value: 'Amazonas' },
    { name: 'Antioquia', value: 'Antioquia' },
    { name: 'Arauca', value: 'Arauca' },
  ],
  city: [
    { name: 'Barranquilla', value: 'Barranquilla' },
    { name: 'Cali', value: 'Cali' },
    { name: 'Medellin', value: 'Medellin' },
  ],
};
