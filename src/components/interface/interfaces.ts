export interface ILog {
  email: string;
  password: string;
}

export interface IRegister {
  full_name: string;
  birth: string;
  email: string;
  password: string;
}

export interface INote {
  title: string;
  note?: string;
}
