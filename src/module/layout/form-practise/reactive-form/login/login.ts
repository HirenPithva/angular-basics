import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ILoginFormControls } from './model/login.model';
import { CommonService } from '../../../../../common/service/common.service';
import { network_token, NetworkService } from '../../../../../common/service/network.service';
import { AccountService } from '../../../../../common/service/account.service';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements OnInit {
  formGrp!: FormGroup;
  data!: ILoginFormControls;
  initialState!:ILoginFormControls; 

  constructor(private fb: FormBuilder, private accountService: AccountService){
    this.formGrp = fb.group({
      userName: fb.control("", Validators.required),
      password: fb.control("", Validators.required)
    });
    
  }

  ngOnInit(): void {
    this.setForm();
  }

  setForm(){
    if(this.data == null || this.data == undefined){
      this.formGrp.reset();
    }
    else{
      this.formGrp.patchValue({
        userName: this.data.userName,
        password: this.data.password
      })
    }
    this.initialState = this.formGrp.getRawValue();
  }

  async onSubmit(){
    console.log("On submit called")
    let hasFormChanged = await CommonService.hasFormChangedObj(this.formGrp, this.initialState,false, true );
    if(hasFormChanged){
      if(this.formGrp.valid && this.formGrp.dirty ){
        const payload = this.formGrp.getRawValue();
        
        this.accountService.login(payload);
      }
    }
  }

  
}
