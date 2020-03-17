import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import { LogInComponent } from './shared/components/log-in/log-in.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CreateAccountComponent } from './shared/components/create-account/create-account.component';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import {DatePipe} from '@angular/common';
import {ShowDatasetComponent} from './shared/components/show-dataset/show-dataset.component';
import {MatGridListModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    CreateAccountComponent,
    ShowDatasetComponent
  ],
  entryComponents: [
    LogInComponent,
    CreateAccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatSelectModule,
    MatExpansionModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatCardModule,
    MatNativeDateModule,
    HttpClientModule,
    MatGridListModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
