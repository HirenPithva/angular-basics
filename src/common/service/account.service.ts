import { Inject, Injectable } from "@angular/core";
import { ILoginFormControls } from "../../module/layout/form-practise/reactive-form/login/model/login.model";
import { API } from "../models/endpoint";
import { network_token, NetworkService } from "./network.service";
import { jwtDecode } from "jwt-decode";
import { User } from "../models/user.model";

@Injectable({
    providedIn: "root"
})

export class AccountService{

    private user!: User;
    public VALIDATE_TOKEN = new RegExp (/^[A-Za-z0-9]+\.[A-Za-z0-9]+\.[A-Za-z0-9]+$/);
    constructor(@Inject(network_token) private networkService: NetworkService){}

    public login(payload: ILoginFormControls){
        this.networkService.post<string>(API.ACCOUNT.LOGIN, payload)
          .subscribe({
            next: (value:string)=>{
                if(this.VALIDATE_TOKEN.test(value)) this.user = new User(value);
            },
            error: (err)=>{
                console.log("login service error:", err);
                alert(err)
            }
          })
    }   
}