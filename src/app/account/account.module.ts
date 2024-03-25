import { CommonModule } from '@angular/common';
import { NgModule, Component } from '@angular/core';
import { BalanceComponent } from './components/balance/balance.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BalanceComponent
  ],
  exports:[
    BalanceComponent

  ],
  imports: [
    CommonModule,
    FormsModule

  ]
})
export class AccountModule { }

