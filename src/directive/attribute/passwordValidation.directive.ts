import { Directive, inject } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";
import { CommonService } from "../../common/service/common.service";

@Directive({
    selector: "[passwordValidation]",
    standalone: true,
    providers:[{
        provide:NG_VALIDATORS,
        useExisting: PasswordValidation,
        multi: true
    }],
})
export class PasswordValidation implements Validator{
    validate(control: AbstractControl): ValidationErrors | null {
        const val = control.value;
        if(!CommonService.isEmpty(val)){
            const passwordPattern = new RegExp( "^(?=.*[A-Z])(?=.*\\d)(?=.*[@#$%&*])[A-Za-z\\d@#$%&*]{6,10}$");
            if(passwordPattern.test(val)){
                return null;
            }
            return {weekPassword: true}
        }
        return null
    }
}