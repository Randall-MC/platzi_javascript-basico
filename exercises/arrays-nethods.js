let items = [
    { itemName: "Mouse Gamer", price: 500 },
    { itemName: "Keyboard", price: 800 },
    { itemName: "Monitor", price: 4500 },
    { itemName: "Desk", price: 5000 },
    { itemName: "Headsets", price: 1500 },
    { itemName: "Laptop", price: 16000 },
];

// Filter method
// Filters the elements that fit the condition and save them in a new array
let filterMethod = items.filter( function(item){
    return item.price <= 500;
});

// Map method
// Creates a new array with the results of the indicated function call applied to each of its elements. 
let mapMethod = items.map( function(item){
    return item.itemName;
});

// Find method
// returns the value of the first element of the array that satisfies the given test function in a new array
let findMethod = items.find( function(item) {
    return item.itemName === "Laptop";
})

// For each
// Calls a function for each element in an array
items.forEach( function(item) {
    return console.log(item.itemName);
})

// Some method
// Checks if at least one element of the array meets the condition implemented by the provided function.
let someMethod = items.some(function(item){
    return item.price >= 1000;
});
