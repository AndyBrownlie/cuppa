import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MdCardModule} from '@angular/material';
import {MdMenuModule} from '@angular/material';
import {MdInputModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';
import {MdListModule} from '@angular/material';
import {MdIconModule} from '@angular/material';
import {MdSidenavModule} from '@angular/material';
import {MdToolbarModule} from '@angular/material';
import {MdTooltipModule} from '@angular/material';
import {MdDialogModule} from '@angular/material';
import {CovalentMediaModule} from '@covalent/core';

import { CovalentLayoutModule, CovalentStepsModule /*, any other modules */ } from '@covalent/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    MdCardModule,
    MdMenuModule,
    MdInputModule,
    MdButtonModule,
    MdListModule,
    MdIconModule,
    MdSidenavModule,
    MdToolbarModule,
    MdTooltipModule,
    MdDialogModule,
    CovalentMediaModule,
    CovalentLayoutModule,
    CovalentStepsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
