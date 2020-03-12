import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  loginFormGroup: FormGroup;

  constructor(public dialog: MatDialogRef<LogInComponent>) { }

  ngOnInit() {
    this.loginFormGroup = new FormGroup({
      email: new FormControl(undefined, Validators.required),
      password: new FormControl(undefined, Validators.required)
    });
  }
  onClose() {
    this.dialog.close();
  }

}
