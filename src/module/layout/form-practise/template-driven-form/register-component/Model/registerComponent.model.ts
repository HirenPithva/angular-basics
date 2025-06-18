import { IFormControlName } from "../../../../../../common/models/common.model";

export interface IUserRegister{
    firstName: string;
    lastName: string;
    email:string;
    password:string;
    userName: String;
}

 

export const USERREGISTER_CONSTANT:IFormControlName<IUserRegister> = {
    FIRSTNAME: "firstName" ,
    LASTNAME: "lastName",
    EMAIL: "email",
    PASSWORD: "password",
    USERNAME: "userName"
};