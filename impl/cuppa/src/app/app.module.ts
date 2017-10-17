import { TIMESHEET_ENTRY_SERVICE } from './timesheet-entry/timesheet-entry.constants';
import { platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material';
import {MatMenuModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatListModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material';
import {MatSelectModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material';
import {MatTooltipModule} from '@angular/material';
import {MatDialogModule} from '@angular/material';
import {MatSlideToggleModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material';
import {CovalentMediaModule} from '@covalent/core';
import { CovalentLayoutModule, CovalentStepsModule /*, any other modules */ } from '@covalent/core';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { TimesheetEntryComponent } from './timesheet-entry/timesheet-entry.component';
import { TimesheetEntryService } from './timesheet-entry/timesheet-entry.service';

@NgModule({
  declarations: [
    AppComponent,
    TimesheetEntryComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    MatSelectModule,
    MatToolbarModule,
    MatTooltipModule,
    MatDialogModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    CovalentMediaModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    CoreModule.forRoot(),
    SharedModule
  ],
  providers: [{provide: TIMESHEET_ENTRY_SERVICE, useClass: TimesheetEntryService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
