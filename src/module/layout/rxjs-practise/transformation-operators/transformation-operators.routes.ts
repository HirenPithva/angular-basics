import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: "",
        loadComponent: ()=> import("./transformation-operators").then((c)=> c.TransformationOperators),
        children: [
            {
                path: "map",
                loadComponent: ()=> import("./map-operator/map-operator").then((c)=> c.MapOperator)
            },
            {
                path: "scan",
                loadComponent: ()=> import("./scan-operator/scan-operator").then((c)=> c.ScanOperator)
            },
            {
                path: "buffer",
                loadComponent: ()=> import("./buffer-operator/buffer-operator").then((c)=> c.BufferOperator)
            },
            {
                path: "flatten-map",
                loadComponent: ()=> import("./switch-concate-merge-exhust-operator/switch-concate-merge-exhust-operator").then((c)=> c.SwitchConcateMergeExhustOperator)
            }
            
        ]
    }
]