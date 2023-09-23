export interface Client {
    id: number;
    user: {
      id: number;
      firstName: string;
      lastName: string;
      cellphoneNumber: string;
      email: string;
      password: string;
      birthDate: string;
      gender: string;
      lastConnection: string;
      address: string;
    };
  }
  