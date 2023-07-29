import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
@NgModule({
  declarations: [   
    HeaderComponent
],
  imports: [
    MatToolbarModule
  ],
  exports: [HeaderComponent]
})
export class SharedModule { }
