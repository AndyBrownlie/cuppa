import { AuthService }                    from './auth.service';
import { NgModule, ModuleWithProviders }  from '@angular/core';
import { CommonModule }                   from '@angular/common';
import { MatIconModule }                  from '@angular/material';

import { CoreRoutingModule }              from './core-routing.module';
import { ToolbarComponent }               from './toolbar/toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    MatIconModule
  ],
  exports: [ToolbarComponent],
  providers: [AuthService],
  declarations: [ToolbarComponent],
  
})
export class CoreModule { 
    static forRoot(): ModuleWithProviders {
        return {
          ngModule: CoreModule,
          providers: [AuthService]
        };
      }
}
