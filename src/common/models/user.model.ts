import { jwtDecode } from "jwt-decode";

export class User{
    id!: number;
    FamilyName!: string;
    Name!: string;
    Email!: string;

    constructor(token: string){
        const tokenData = jwtDecode(token);
        console.log("tokenData:", tokenData);
    }
}