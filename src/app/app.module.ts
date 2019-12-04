import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorBlockComponent } from 'src/components/color-block/color-block';
import { CounterComponent } from 'src/components/counter/counter';

@NgModule({
  declarations: [
    AppComponent,
    ColorBlockComponent,
    CounterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
