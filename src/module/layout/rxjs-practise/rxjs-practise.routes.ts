import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: "",
        loadComponent: ()=> import("./rxjs-practise").then((c)=> c.RxjsPractise),
        children: [
            {
                path: "transformation",
                loadChildren: ()=> import("./transformation-operators/transformation-operators.routes").then((r)=> r.routes)
            },
            {
                path: "creational",
                loadComponent: ()=> import("./async-creational-opeartor/async-creational-opeartor").then((c)=> c.AsyncCreationalOpeartor)
            }
            ,
            {
                path: "conbinational",
                loadChildren: ()=> import("./combinational-operator/combinational-operator.routes").then((r)=> r.routes)
            },
            {
                path: "subject",
                loadComponent: ()=> import("./subject-operator/subject-operator").then((c)=> c.SubjectOperator)
            }
        ]
    }
]