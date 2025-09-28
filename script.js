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

const animalsArray = [];

document.getElementById("createBtn").addEventListener("click", function () {
  const name = document.getElementById("animalName").value.trim();
  const color = document.getElementById("animalColor").value.trim();
  const age = document.getElementById("animalAge").value.trim();

  if (name && color && age) {
    const animal = new Animal(name, color, age);
    animalsArray.push(animal);

    // Output section ko visible karo
    document.getElementById("outputSection").style.display = "block";

    document.getElementById("output").textContent = animal.describe();

    const list = document.getElementById("animalList");
    list.innerHTML = "";
    animalsArray.forEach((a) => {
      const li = document.createElement("li");
      li.textContent = a.describe();
      list.appendChild(li);
    });

    document.getElementById("animalName").value = "";
    document.getElementById("animalColor").value = "";
    document.getElementById("animalAge").value = "";
  } else {
    alert("Please fill all fields!");
  }
});
