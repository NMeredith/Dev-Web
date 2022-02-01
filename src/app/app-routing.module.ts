import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccueilComponent} from "./accueil/accueil.component";
import {ListTitreComponent} from "./list-titre/list-titre.component";

import {ContactComponent} from "./contact/contact.component";
import {EditionComponent} from "./list-titre/edition/edition.component";

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  {path:'accueil', component: AccueilComponent},
  {path:'listTitre', component: ListTitreComponent},
  //{ path: 'edit/:id', component: EditionComponent, resolve: { employe: EmployeDetailResolverResolver } },

  {path:'contact', component: ContactComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
