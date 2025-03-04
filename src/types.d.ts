export interface ContactMutation {
  name: string;
  phone: string;
  email: string;
  photo: string;
}

export interface Contact extends ContactMutation {
  id: string;
}