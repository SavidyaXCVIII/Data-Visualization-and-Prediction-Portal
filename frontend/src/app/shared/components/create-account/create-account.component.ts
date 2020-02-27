import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  createAccountFormGroup: FormGroup;
  constructor(public dialog: MatDialogRef<CreateAccountComponent>) { }

  ngOnInit() {
    this.createAccountFormGroup = new FormGroup({
      name: new FormControl(undefined, Validators.required),
      email: new FormControl(undefined, Validators.required),
      password: new FormControl(undefined, Validators.required),
      confirmPassword: new FormControl(undefined, Validators.required)
    });
  }

  onClose() {
    this.dialog.close();
  }
}
