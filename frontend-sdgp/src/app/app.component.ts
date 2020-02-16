import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {LogInComponent} from './shared/components/log-in/log-in.component';
import {CreateAccountComponent} from './shared/components/create-account/create-account.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontend-sdgp';

constructor(public dialog: MatDialog) {
}

  ngOnInit(): void {
  }

  openLogInDialog(): void {
    this.dialog.open(LogInComponent, {
      width: '600px',
      data: {}
    });
  }

  openCreateAccountDialog(): void {
    this.dialog.open(CreateAccountComponent, {
      width: '600px',
      data: {}
    });
  }
}
