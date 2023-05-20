import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddcontactComponent } from '../addcontact/addcontact.component';
import { ContactlistComponent } from '../contactlist/contactlist.component';
import { RouterModule,Routes } from '@angular/router';
var routes:Routes = [
  { path: 'addcontact', component: AddcontactComponent},
  { path: 'contactlist', component: ContactlistComponent},
  { path: '', redirectTo: 'contactlist', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AddcontactComponent,
    ContactlistComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class ContactsModule { }
