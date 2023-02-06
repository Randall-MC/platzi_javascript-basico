let brands = ["brand 1", "brand 2", "brand 3", "brand 4", "brand 5"];
let models = ["model 1", "model 2", "model 3", "model 4", "model 5"];
let year = [2018, 2017, 2022, 2021, 2020];

function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}

let cars = [];
for (let i = 0; i < brands.length; i++) {
    cars.push(new Car(brands[i], models[i], year[i]));
}

cars;