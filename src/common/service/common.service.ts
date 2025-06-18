import { Injectable } from "@angular/core";
import { FormGroup, NgForm } from "@angular/forms";
import { ErrorMessage, IFormControlName, ValidationErrorMessage } from "../models/common.model";

@Injectable({
    providedIn: "root",
})

export class CommonService{
    static isEmpty = (val:string):boolean =>{
        if(val != null && val != "" &&  val != undefined){
            return false;
        }
        return true;
    }

        
    static async hasFormChangedObj( currentFormState: FormGroup, initialVal: object, showDiscardChanges:boolean, showNoChanges:boolean):Promise<boolean>{
        const currentVal = currentFormState.getRawValue();
        const currentStateStr = JSON.stringify( this.convertToArr(currentVal));
        const initialStateStr = JSON.stringify( this.convertToArr(initialVal));
        console.log("Currnet state", currentStateStr)
        console.log("initial state", initialStateStr)
        if(currentStateStr !== initialStateStr && currentFormState.dirty ){
        if (showDiscardChanges) {
            const result = confirm("Changes detected. Do you want to leave the page and discard the changes")
            // const result = await this.dialogRef.open(ConfirmDialogComponent,{ 
            //   width: '577px',
            //   data:{
            //     title: SystemConst.LEAVING_PAGE,
            //     message: SystemConst.LEAVING_PAGE_WITHOUT_SAVING
            //   }
            // })
            //   .afterClosed()
            //   .toPromise();
            return result === true;
        } else {
            return true;
        }
        }
        else{
        if (showNoChanges) {
            if(currentFormState.valid){
                alert("No changes detected!");
            //   this.snackbarService.warning(SystemConst.NO_CHANGE_DETECT);
            return false;
            }
            else{
            currentFormState.markAllAsTouched()
            return false;
            }
        }
        if (!showNoChanges) {
            return true;
        }
        }
        return false;
    }
  
    static convertToArr(obj: Record<string, any>):any[]{
        const arr:any[] = [];
        const normalizeValue = (value: any) => value === null || value === '' || value === undefined ? '' : String(value);

        Object.keys(obj).map((key: string) => {
        if(obj[key] != null && typeof(obj[key]) == "object"){
            //will add result to main string
            arr.push(this.convertToArr(obj[key]));
        }
        arr.push([key, normalizeValue(obj[key])]);
        })
        return arr;
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