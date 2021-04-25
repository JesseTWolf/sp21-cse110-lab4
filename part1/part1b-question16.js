let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40, 
    rareCars: 2
};

// Iterate through each key in the statistics object.
for (let key in statistics) {
    // If our key starts with r OR the value of the property is an odd number then
    if (key.startsWith('r') || statistics[key]%2 != 0) {
        // Print out the value of the property. 
        console.log(statistics[key]);
    }
}