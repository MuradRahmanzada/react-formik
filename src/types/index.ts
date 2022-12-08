export interface IBasicForm {
  email: string;
  age: string | number;
  password: string | number;
}

export interface IAdvanceForm {
    username: string;
    jobType: string;
    acceptedTos?: string | number | undefined;
}
