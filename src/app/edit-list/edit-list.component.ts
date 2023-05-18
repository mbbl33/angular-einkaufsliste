import {Component} from '@angular/core';
import {ListItemsService, Item} from '../Services/list-items.service'


@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.css']
})
export class EditListComponent {
  public newItemName: string = '';
  public newItemAmount: number = 1;

  constructor(public listItemsService: ListItemsService) {
  }

}
