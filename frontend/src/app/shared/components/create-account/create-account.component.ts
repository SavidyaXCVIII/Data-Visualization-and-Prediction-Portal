import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {User} from '../../../models/user';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  signInProgress = false;
  createAccountFormGroup: FormGroup;
  uploadFile = new FormData();
  user = new User();
  /*constructor(private http: HttpClient,public dialog: MatDialogRef<CreateAccountComponent>) { }*/
  constructor(private http: HttpClient, public dialog: MatDialogRef<CreateAccountComponent>, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.createAccountFormGroup = new FormGroup({
      email: new FormControl({value: '', disabled: this.signInProgress}, Validators.required),
      fullName: new FormControl({value: '', disabled: this.signInProgress}, Validators.required),
      companyName: new FormControl({value: '', disabled: this.signInProgress}, Validators.required),
      phone: new FormControl({value: '', disabled: this.signInProgress}, Validators.required),
      password: new FormControl({value: '', disabled: this.signInProgress}, Validators.required),
      confirmPassword: new FormControl({value: '', disabled: this.signInProgress}, Validators.required),
      checkbox: new FormControl({value: undefined, disabled: this.signInProgress}, Validators.required)
    });
  }

  registerUser() {
    this.signInProgress = true;
    this.user = {...this.createAccountFormGroup.value};
    this.http.post('http://localhost:8080/signup?email=' + this.user.email + '&fullName=' + this.user.fullName +
      '&company=' + this.user.companyName + '&phone=' + this.user.phone +
      '&password=' + this.user.password, this.uploadFile).subscribe((val) => {
      console.log(val);
      this.onReset();
    });
    this.snackBar.open('User account created !!!', 'Ok', {
      duration: 2000,
    });
    this.dialog.close();
  }

  onClose() {
    this.dialog.close();
  }

  onReset() {
    this.createAccountFormGroup.reset();
  }
}
