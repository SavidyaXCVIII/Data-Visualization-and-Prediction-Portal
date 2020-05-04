import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {User} from '../../../models/user';
import {GlobalService} from '../../../services/global.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  loginFormGroup: FormGroup;
  chosenUser = new User();
  readonly ROOT_URL = 'http://localhost:8080';

  constructor(private httpClient: HttpClient, public dialog: MatDialogRef<LogInComponent>, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.loginFormGroup = new FormGroup({
      email: new FormControl(undefined, Validators.required),
      password: new FormControl(undefined, Validators.required)
    });
  }

  onClose() {
    this.dialog.close();
  }

  getData() {
    this.chosenUser = {...this.loginFormGroup.value};
    return this.httpClient.get(this.ROOT_URL + '/login?mail=' + this.chosenUser.email)
      .subscribe(response => {
        console.log(response);
        if (response == null) {
          this.snackBar.open('email or password incorrect !!!', 'Ok', {
            duration: 2000,
          });
        } else {
          this.snackBar.open('User logged in !!!', 'Ok', {
            duration: 2000,
          });
          this.dialog.close();
        }
      });
  }
}
