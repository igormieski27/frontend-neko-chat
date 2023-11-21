// animal-list.component.ts

import { Component } from "@angular/core";
import { AnimalService } from "./animal-list.service";

@Component({
  selector: "app-animal-list",
  templateUrl: "./animal-list.component.html",
  styleUrls: ["./animal-list.component.css"],
})
export class AnimalListComponent {
  constructor(private animalService: AnimalService) {}

  getRandomAnimalFromService(): string {
    return this.animalService.getRandomAnimal();
  }
}
