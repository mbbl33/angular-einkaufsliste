import { Component } from '@angular/core';

class Item {
  name: string = '';
  amount: number = 0;
  Item(name: string, amount:number){
    this.name = name;
    this.amount = amount;
  }
}

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.css']
})
export class EditListComponent {
  newItemName: string = '';
  newItemAmount: number = 0;

  //listItems: Item [] = {};
}
