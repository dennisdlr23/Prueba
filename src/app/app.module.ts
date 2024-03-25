import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { AccountModule } from './account/account.module';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,

    AccountModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
