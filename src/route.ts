import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: "",
        loadComponent: ()=>import('./main').then((arg)=> arg.App),
        children: [
            {
                path:"",
                loadChildren : ()=> {return import("./module/layout/layout.route").then((r) => r.routes);}
            }
        ]
    }
]