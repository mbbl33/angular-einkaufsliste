import { Component } from '@angular/core';

@Component({
  selector: 'app-checkliste',
  templateUrl: './checkliste.component.html',
  styleUrls: ['./checkliste.component.css']
})
export class ChecklisteComponent {
  items :string[] = ["Kuchen", "Schnaps", "Wasser"]
  isBought: boolean = false;
}
