import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ListItemComponent} from './list-item/list-item.component';
import {FormsModule} from "@angular/forms";
import {ChecklisteComponent} from './checkliste/checkliste.component';
import {EditListComponent} from './edit-list/edit-list.component';

const appRoute: Routes = [
    {path: '', redirectTo: 'checklist', pathMatch:'full'},
    {path: 'checklist', component: ChecklisteComponent},
    {path: 'editList', component: EditListComponent}

]

@NgModule({
    declarations: [
        AppComponent,
        ListItemComponent,
        ChecklisteComponent,
        EditListComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        RouterModule.forRoot(appRoute)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
