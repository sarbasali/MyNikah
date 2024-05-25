import { Component } from '@angular/core';
import {FormBuilder ,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],

})

export class RegisterComponent {
 
 
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = true;


  religion = 'none';
  nationality='none'
  constructor(private _formBuilder: FormBuilder) {
   
  }

}
