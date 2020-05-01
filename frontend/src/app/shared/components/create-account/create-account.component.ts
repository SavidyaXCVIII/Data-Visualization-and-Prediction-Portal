import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {User} from '../../../models/user';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  createAccountFormGroup: FormGroup;
  uploadFile = new FormData();
  user = new User();
  /*constructor(private http: HttpClient,public dialog: MatDialogRef<CreateAccountComponent>) { }*/
  constructor(private http: HttpClient, public dialog: MatDialogRef<CreateAccountComponent>) {
  }

  ngOnInit() {
    this.createAccountFormGroup = new FormGroup({
      name: new FormControl(undefined, Validators.required),
      email: new FormControl(undefined, Validators.required),
      password: new FormControl(undefined, Validators.required),
      confirmPassword: new FormControl(undefined, Validators.required)
    });
  }

  registerUser() {
    this.user = {...this.createAccountFormGroup.value};
    this.http.post('&email=' + this.user.email + '&name=' + this.user.fullname +
      '&company=' + this.user.companyName + '&phone=' + this.user.phone +
      '&password=' + this.user.password, this.uploadFile).subscribe((val) => {
      console.log(val);
      this.onReset();
    });
  }

  onClose() {
    this.dialog.close();
  }

  onReset() {
    this.createAccountFormGroup.reset();
  }
}
