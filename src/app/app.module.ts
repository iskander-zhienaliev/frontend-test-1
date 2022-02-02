import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {UsersEditModalModule} from "./users-edit-modal/users-edit-modal.module";
import {MatDialogModule} from "@angular/material/dialog";
import {SharedModule} from "./shared/shared.module";
import {TranslatePipe} from "./pipes/translate.pipe";

@NgModule({
  declarations: [
    AppComponent,
    TranslatePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
    SharedModule,
    UsersEditModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
