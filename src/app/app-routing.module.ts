import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChecklisteComponent} from "./checkliste/checkliste.component";
import {EditListComponent} from "./edit-list/edit-list.component";

const routes: Routes = [
  {path: '', redirectTo: 'checklist', pathMatch: 'full'},
  {path: 'checklist', component: ChecklisteComponent},
  {path: 'editList', component: EditListComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
