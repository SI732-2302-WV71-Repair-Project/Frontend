export interface UserModel{
  id: number;
  firstName: string;
  lastName: string;
  cellphoneNumber: string;
  email: string;
  password: string;
  birthDate: Date|null;
  gender: string;
  lastConnection: Date|null;
  address: string;
  district: string;
}
