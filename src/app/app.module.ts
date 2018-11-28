import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DictionaryComponent} from './dictionary/dictionary/dictionary.component';
import {RedirectorComponent} from './redirector/redirector.component';
import {DictionaryChildComponent} from './dictionary/dictionary/dictionary-child/dictionary-child.component';
import {MymusicComponent} from './mymusic/mymusic.component';
import { LivedTimeComponent } from './lived-time/lived-time.component';

@NgModule({
  declarations: [
    AppComponent,
    DictionaryComponent,
    RedirectorComponent,
    DictionaryChildComponent,
    MymusicComponent,
    LivedTimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
