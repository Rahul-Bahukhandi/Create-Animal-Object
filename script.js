/**
 * 1. Make a Class
 * Create a class "Animal" with properties: "AnimalName", "AnimalColor", "AnimalAge". Add a method "describe() => returns text like:" "Dog is brown and 3 years old."  
 * 2. Build HTML Form
 * three-input fields => Name, Color, Age
 * one-button => "Create Animal"
 * 3. Connect with JS(DOM)
 * on button click:
 * Take values from inputs Create new Animal object showDetails + describe() output on the page.
 * Extra(optional): Save all animals in an array and display them in a list.
 * Focus: Learn **Classes, Objects, DOM, Events.
 */

// Step 1: Create Animal class
class Animal {
  constructor(name, color, age) {
    this.AnimalName = name;
    this.AnimalColor = color;
    this.AnimalAge = age;
  }

  describe() {
    return `${this.AnimalName} is ${this.AnimalColor} and ${this.AnimalAge} years old.`;
  }
}

// Step 4 (optional): Store all animals
const animalList = [];


// Step 3: Handle button click
document.getElementById("createBtn").addEventListener("click", () => {
  const name = document.getElementById("animalName").value.trim();
  const color = document.getElementById("animalColor").value.trim();
  const age = document.getElementById("animalAge").value.trim();

  if (!name || !color || !age) {
    alert("Please fill in all fields.");
    return;
  }

  // Create new Animal object
  const animal = new Animal(name, color, age);

  // Store in list (optional)
  animalList.push(animal);
  console.log(animalList);

  // Output to page
  const output = document.getElementById("output");
  const para = document.createElement("p");
  para.className = "animal-item";
  para.textContent = animal.describe();
  output.appendChild(para);

  // Clear inputs
  document.getElementById("animalName").value = "";
  document.getElementById("animalColor").value = "";
  document.getElementById("animalAge").value = "";
});
