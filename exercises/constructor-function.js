function car(brand, model, year) {
    //   key     value 
    this.brand = brand;
    this.model = model;
    this.year = year;
}

// Generates a new instance of our constructor function. An instance is generating an object that derives from another.
let carOne = new car("Tesla", "Model 3", 2020);
let carTwo = new car("Tesla", "Model X", 2018);
let carThree = new car("Toyota", "Corola", 2020);
