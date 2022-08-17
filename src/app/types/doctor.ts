export enum DOCTOR_LIST_STATUS {
  COMPLETED = 1,
  IN_PROGRESS
}

export interface DOCTOR {
  name: string;
  username:  string;
  email:string;
  phone:string;
  city:string;
  website:string;
}
