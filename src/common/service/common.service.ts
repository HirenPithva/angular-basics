import { Injectable } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ErrorMessage, IFormControlName, ValidationErrorMessage } from "../common.model";

@Injectable({
    providedIn: "root"
})

export class CommonService{
    static isEmpty = (val:string):boolean =>{
        if(val != null && val != "" &&  val != undefined){
            return false;
        }
        return true;
    }

    
    static matchError(errorKey: string, fieldName: string):string{
        switch (errorKey) {
        case 'required' : return `this ${fieldName} is required.`
        case 'email': return `Please enter valid email.`
        case 'weekPassword': return `Password should have atleast 1 uppercase, 1 digit, 1 special character among '@#$%&*' and it should atleast 6 to 10 character long.`
        default : return "";
        }
    }

    static validate<T>(key: string, frm: NgForm, lstFormControl: IFormControlName<T>, errorObject:ValidationErrorMessage<T>): ValidationErrorMessage<T>{
        const fields:string[]  = Object.keys(lstFormControl);
        let errorObj = errorObject;
        fields.forEach((fieldName : string)=>{

        if(lstFormControl[fieldName] == key){
            const control = frm?.form.controls[lstFormControl[fieldName] as string];
            const arrError = control?.errors;
            console.log("touced:", control?.touched , "  invalid:", control?.invalid)

            console.log("control:", control)
            console.log("touced:", control?.touched , "  invalid:", control?.invalid)
            const visiblity: boolean = control?.invalid && control?.touched ? true : false;
            if(arrError){
            const firstError = Object.keys(arrError)[0];
            const strErr = this.matchError(firstError, fieldName);
            const errorMessage: ErrorMessage = {
                error : [strErr],
                visible: visiblity
            }
            errorObj[lstFormControl[fieldName]]= errorMessage;
            errorObject = {...errorObj};
            }
            else{
            const fieldError = errorObj[lstFormControl[fieldName]]; 
            if(fieldError?.error?.length != 0 || fieldError != null || fieldError != undefined){
                delete errorObj[lstFormControl[fieldName]];
                errorObject = {...errorObj};
            }
            }
        }
        })
        return errorObj;
    }
}