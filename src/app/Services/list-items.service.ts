import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListItemsService {
  private listItems: Item[] = [];
  constructor() { }
  addElement(name: string, amount: number): void {
    this.listItems.push({ name, amount, isBought: false });
  }

  removeElement(index: number): void {
    this.listItems.splice(index, 1);
  }

  getListItems(): Item[] {
    return this.listItems;
  }
}

export interface Item {
  name: string;
  amount: number;
  isBought: boolean;
}

