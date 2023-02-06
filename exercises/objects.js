let car = {
    // This are named properties
    // key: value
    brand: "Toyota",
    model: "Corola",
    year: 2020,
    // Functions inside objects are known like methods
    getInformation: function() {
        // this make reference to its father object, which in this case is car
        return `${this.brand} ${this.model} ${this.year}`;
    }
}