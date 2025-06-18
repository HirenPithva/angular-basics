import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: "",
        loadComponent: ()=> import("./rxjs-practise").then((c)=> c.RxjsPractise),
        children: [
            {
                path: "transformation",
                loadChildren: ()=> import("./transformation-operators/transformation-operators.routes").then((r)=> r.routes)
            }
        ]
    }
]