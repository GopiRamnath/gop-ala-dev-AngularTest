import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentMgmtComponent } from './student-mgmt/student-mgmt.component';
import {SearchUserPipe} from './CustomBuild/app.searchuser'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SearchUserPipe,
    AppComponent,
    StudentMgmtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
