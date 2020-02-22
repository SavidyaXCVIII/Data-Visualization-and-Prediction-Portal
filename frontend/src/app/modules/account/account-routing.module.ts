import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateAccountComponent} from "./create-account/create-account.component";
import {LandingCoverComponent} from "../home/components/landing-cover/landing-cover.component";


const routes: Routes = [
  {

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
