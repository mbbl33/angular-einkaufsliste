import { Component } from '@angular/core';
import {ListItemsService} from "../Services/list-items.service";

@Component({
  selector: 'app-checkliste',
  templateUrl: './checkliste.component.html',
  styleUrls: ['./checkliste.component.css']
})
export class ChecklisteComponent {
  constructor(public listItemsService: ListItemsService) {
  }
}
