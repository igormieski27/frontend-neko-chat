import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AnimalService {
  animalNames: string[] = [
    "elephant",
    "giraffe",
    "tiger",
    "lion",
    "monkey",
    "penguin",
    "koala",
    "rhinoceros",
    "hippopotamus",
    "panda",
    "zebra",
    "kangaroo",
    "crocodile",
    "lemur",
    "jaguar",
    "lemming",
    "parrot",
    "flamingo",
    "armadillo",
    "chameleon",
    "penguin",
    "tarantula",
    "octopus",
    "anteater",
    "vulture",
    "cockroach",
    "snail",
    "platypus",
    "buffalo",
    "quokka",
    "porcupine",
    "beetle",
    "iguana",
    "hedgehog",
    "caterpillar",
    "mongoose",
    "pufferfish",
    "dolphin",
    "whale",
    "cheetah",
    "orangutan",
    "lemur",
    "hedgehog",
    "starfish",
    "armadillo",
    "gazelle",
    "iguana",
    "jellyfish",
    "meerkat",
    "lemming",
    "narwhal",
    "mongoose",
    "kangaroo",
    "elephant",
    "koala",
    "penguin",
    "platypus",
    "quokka",
    "rhinoceros",
    "sloth",
    "toucan",
    "wombat",
    "yak",
    "zebra",
    "cockroach",
    "dolphin",
    "flamingo",
    "giraffe",
    "hedgehog",
    "iguana",
    "jellyfish",
    "koala",
    "lion",
    "mongoose",
    "narwhal",
    "octopus",
    "panda",
    "quokka",
    "rhinoceros",
    "sloth",
    "tarantula",
    "unicorn",
    "vulture",
    "whale",
    "demon",
    "yak",
    "zebra",
  ];

  getRandomAnimal(): string {
    const randomIndex = Math.floor(Math.random() * this.animalNames.length);
    return this.animalNames[randomIndex];
  }
}