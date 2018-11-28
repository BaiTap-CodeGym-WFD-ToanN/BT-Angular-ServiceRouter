import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DictionaryComponent} from './dictionary/dictionary/dictionary.component';
import {RedirectorComponent} from './redirector/redirector.component';
import {DictionaryChildComponent} from './dictionary/dictionary/dictionary-child/dictionary-child.component';
import {MymusicComponent} from './mymusic/mymusic.component';
import {LivedTimeComponent} from './lived-time/lived-time.component';

const routes: Routes = [
  {path: '', component: RedirectorComponent},
  {
    path: 'dic', component: DictionaryComponent, children: [
      {path: ':word', component: DictionaryChildComponent}
    ]
  },
  {path: 'music', component: MymusicComponent},
  {path: 'time', component: LivedTimeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
