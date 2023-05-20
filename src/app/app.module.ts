import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule,Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

var routes:Routes = [
  { path: 'website', 
    loadChildren: () => import('./website/website.module').then(m => m.WebsiteModule)},
    { path: 'contacts',
    loadChildren: () => import ('./contacts/contacts.module').then(m => m.ContactsModule)
  },
  { path: '', redirectTo: 'website', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes),HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
