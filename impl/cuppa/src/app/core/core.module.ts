import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material';

import { CoreRoutingModule } from './core-routing.module';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    MatIconModule
  ],
  exports: [
    ToolbarComponent
  ],
  declarations: [ToolbarComponent]
})
export class CoreModule { }
