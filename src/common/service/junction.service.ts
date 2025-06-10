import { EventEmitter, Injectable } from "@angular/core";

// @Injectable({
//     providedIn: 'root'
// })
export const JUNCTION_SERVICE = "junction_service";

export class junctionService{
    public onSendMessage = new EventEmitter<string>();
}