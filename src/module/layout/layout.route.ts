import { Routes } from "@angular/router";

export const routes : Routes = [
    {
        path:"",
        loadComponent: () => import("./layout").then((arg) => arg.Layout),
        children: [
            {
                path: "directive",
                loadComponent: ()=> import('./directive-practise/component-directive/component-directive').then((arg)=> arg.DirectiveComponent)
            }
            ,{
                path: "data-transfer",
                loadComponent: ()=> import('./data-transfer-practise/parent/parent').then((arg)=> arg.Parent)
            },
            {
                path:"view-encapsulation",
                loadComponent: ()=> import("./view-encapsulation-practise/root-component/root-component").then((arg)=> arg.RootComponent)
            },
            {
                path: "form",
                loadChildren: ()=> import("./form-practise/form.route").then((r)=> r.routes)
            },
            {
                path: "service-data-tranfer",
                loadComponent: ()=> import("./data-transfer-with-service-practise/two-way-binding-technique/two-way-binding-technique").then((arg)=>arg.TwoWayBindingTechnique)
            },
            {
                path: "rxjs",
                loadChildren: ()=> import("./rxjs-practise/rxjs-practise.routes").then((r)=> r.routes)
            }
        ]
    }
]