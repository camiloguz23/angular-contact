export interface UserType {
  id: number;
  sex: string;
  date_birthday: string;
  name: string;
  last_name: string;
  email: string;
  addres: string;
  country: string;
  Deparment: string;
  City: string;
  comment: string;
}

export interface ListUserType {
  users: UserType[];
}