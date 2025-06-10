import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator  } from "@angular/forms";

@Directive({
    selector: "[emailValidation]",
    standalone: true,
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: EmailValidation,
        multi: true
    }]
})
export class EmailValidation implements Validator{
    validate(control: AbstractControl<any, any>): ValidationErrors | null {
        const regstr = new RegExp("^[\\w\\d._%+-]+@[\\w\\d.-]+\\.[a-zA-Z]{2,}$");
        let val = control?.value;
        if(val != "" && val != null && val != undefined){
            if(regstr.test(val)){
                return null;
            }
            else{
                return {"email": true};
            }
        }
        return null;
    }
    // registerOnValidatorChange?(fn: () => void): void {
    //     throw new Error("Method not implemented.");
    // }

}