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
    public VALIDATE_TOKEN = new RegExp (/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+$/);
    constructor(@Inject(network_token) private networkService: NetworkService){}

    public login(payload: ILoginFormControls){
        this.networkService.post<Record<string, string>>(API.ACCOUNT.LOGIN, payload)
          .subscribe({
            next: (value:Record<string, string>)=>{
                console.log("val:", value);
                console.log("valid token:",this.VALIDATE_TOKEN.test(value['key']))
                if(this.VALIDATE_TOKEN.test(value['key'])) {
                    this.user = new User(value['key']);
                    localStorage.setItem("access-token",value['key'] );
                }
            },
            error: (err)=>{
                console.log("login service error:", err);
                alert(err)
            }
          })
    }   
}