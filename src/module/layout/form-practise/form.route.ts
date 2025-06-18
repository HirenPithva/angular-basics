import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: "",
        loadComponent: ()=> import("./form-practise").then((arg)=> arg.FormPractise),
        children: [
            {
                path: "template-driven-form",
                loadComponent: ()=> import("./template-driven-form/register-component/register.component").then((arg)=> arg.RegisterComponent)
            },
            {
                path: "reactive-form",
                loadComponent: () => import('./reactive-form/login/login').then((arg)=> arg.Login)
            }
        ]
    }
]