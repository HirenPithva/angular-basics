import { AfterViewInit, Component, HostBinding, HostListener, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { AbstractControl, FormGroup, FormsModule, NgForm, NgModel } from '@angular/forms';
import { IUserRegister, USERREGISTER_CONSTANT } from './Model/registerComponent.model';
import { IFormControlName, ValidationErrorMessage } from '../../../common/common.model';
import { CommonModule } from '@angular/common';
import { EmailValidation } from '../../../directive/attribute/emailValidation.directive';
import { PasswordValidation } from '../../../directive/attribute/passwordValidation.directive';
import { first } from 'rxjs';
import { CommonService } from '../../../common/service/common.service';

@Component({
  selector: 'register-component',
  imports: [FormsModule, CommonModule, EmailValidation, PasswordValidation ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements AfterViewInit {
  @ViewChild("templateForm") formGrp!: NgForm;
  @ViewChildren(NgModel) controls!: QueryList<NgModel>;

  USERREGISTER_CONSTANT = USERREGISTER_CONSTANT

  errorObject: ValidationErrorMessage<IUserRegister> = {};

  ngAfterViewInit(): void {
    // this.controls.forEach((control : NgModel) => {
    //   control?.valueChanges?.subscribe((value)=>{
    //     this.errorObject = CommonService.validate(control.name, this.formGrp, USERREGISTER_CONSTANT, this.errorObject);
    //     console.log("errorObj:", this.errorObject)
    //   })
    // });   
    
    // this.controls.forEach((control : NgModel) => {
    //   control?.statusChanges?.subscribe((value)=>{
    //     console.log("control Touched:", control);
    //     if(control.touched){
    //       console.log("validated called Touched:", control);

    //       this.errorObject = CommonService.validate(control.name, this.formGrp, USERREGISTER_CONSTANT, this.errorObject);
    //       console.log("errorObj:", this.errorObject)
    //     }
    //   })
    // });   
  }

  onBlurControl(key: keyof IUserRegister){
    this.errorObject = CommonService.validate(key, this.formGrp, USERREGISTER_CONSTANT, this.errorObject);
           console.log("errorObj:", this.errorObject)
  }

  getError(key: keyof IUserRegister){
    return this.errorObject[key]?.error;
  }

  onSave(){
    console.log("save:", this.formGrp);
  }
}
