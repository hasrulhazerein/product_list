import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [BrowserModule, FormsModule, MatButtonModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
