
/* This is just my little bit of background work */ 
const plants = [
    {
        name: "Rose",
        details: "Roses are perennial flowering plants. They are known for their beauty and fragrance.",
    },
    {
        name: "Sunflower",
        details: "Sunflowers are tall, bright yellow flowers that turn to face the sun. They are known for their large heads.",
    },
    {
        name: "Tulip",
        details: "Tulips are spring-blooming perennials with bulbous roots. They come in many colors.",
    },
];

document.getElementById('searchBox').addEventListener('input', function () {
    const query = this.value.toLowerCase();
    const result = plants.find(plant => plant.name.toLowerCase() === query);
    
    if (result) {
        displayPlantDetails(result);
    } else {
        clearDetails();
    }
});

function displayPlantDetails(plant) {
    const specDetails = document.getElementById('specDetails');
    specDetails.innerHTML = `<strong>${plant.name}</strong>: ${plant.details}`;
}

function clearDetails() {
    const specDetails = document.getElementById('specDetails');
    specDetails.innerHTML = '';
}


