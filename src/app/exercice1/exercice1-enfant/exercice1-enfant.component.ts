import { Component, OnInit, Output } from "@angular/core";
import { Input } from "@angular/core";
import { EventEmitter } from "@angular/core";
@Component({
  selector: "app-exercice1-enfant",
  templateUrl: "./exercice1-enfant.component.html",
  styleUrls: ["./exercice1-enfant.component.css"],
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() public compteur: number;
  @Output() private incrementation: EventEmitter<number> = new EventEmitter();
  @Output() private decrementation: EventEmitter<number> = new EventEmitter();
  constructor() {}

  ngOnInit() {}
  increment() {
    this.incrementation.emit(this.compteur);
  }
  decrement() {
    this.decrementation.emit(this.compteur);
  }
}
