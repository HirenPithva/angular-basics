import { IFormControlName } from "../../../../common/common.model";

export interface IUserRegister{
    firstName: string;
    lastName: string;
    email:string;
    password:string;
}

 

export const USERREGISTER_CONSTANT:IFormControlName<IUserRegister> = {
    FIRSTNAME: "firstName" ,
    LASTNAME: "lastName",
    EMAIL: "email",
    PASSWORD: "password"
};