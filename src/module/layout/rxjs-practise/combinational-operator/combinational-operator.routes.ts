import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: "",
        loadComponent: ()=> import("./combinational-operator").then((c)=> c.CombinationalOperator),
        children: [
            {
                path: "merge-concat",
                loadComponent: ()=> import("./concat-merge-operator/concat-merge-operator").then((c)=> c.ConcatMergeOperator)
            },
            {
                path: "combine-result",
                loadComponent: ()=> import("./combine-result-operator/combine-result-operator").then((c)=> c.CombineResultOperator)
            }
        ]
    }
]