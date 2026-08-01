const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Datasets
const booking_dataset = {
    "Rohtak": {
        "Skytech Cinemas": ["Carry On Jatta 3", "Shadaa", "Singham Again", "Stree 2"],
        "Deepak Cinema": ["Avengers: Secret Wars", "Spider-Man", "Pushpa 2", "Animal"],
        "BMS Screens": ["Saunkan Saunkne", "Chal Mera Putt", "Gadar 2", "Jawan"],
        "Gold Digital": ["Deadpool & Wolverine", "Fantastic Four", "Fighter", "Dunki"],
    },
    "Delhi": {
        "PVR Select CityWalk": ["Avengers: Secret Wars", "Blade", "Captain America", "Thor"],
        "Cinepolis DLF Avenue": ["Jawan", "Pathaan", "Tiger 3", "Bhool Bhulaiyaa 3"],
        "Miraj Cinemas": ["Saunkan Saunkne", "Chal Mera Putt", "Angrej", "Sufna"],
        "Delite Cinema": ["Gadar 2", "Animal", "Kalki 2898 AD", "Drishyam 2"],
    },
    "Karnal": {
        "Super Mall Multiplex": ["Deadpool & Wolverine", "Fantastic Four", "Iron Man", "Black Panther"],
        "Movie Time Cinemas": ["Fighter", "Dunki", "Kabir Singh", "Shershaah"],
        "RP Multiplex": ["Arjan Dhillon Live", "Lahoriye", "Qismat", "Bambukat"],
        "Karnal Cinema Hall": ["Kalki 2898 AD", "Golmaal Again", "Chhava", "Baby John"],
    },
    "Chandigarh": {
        "Elante PVR Multiplex": ["Avengers: Secret Wars", "Captain America", "Doctor Strange", "Ant-Man"],
        "Piccadily Square": ["Sufna", "Qismat 2", "Muklawa", "Puaada"],
        "Wave Cinemas": ["Brahmastra", "Drishyam 2", "Chhichhore", "Uri"],
        "Fun Republic": ["Angrej", "Bambukat", "Vekh Baraatan Challiyan", "Rabb Da Radio"],
    },
};

const pricing_chart = { "Standard": 150, "Luxury": 250, "VIP": 400 };

// Variables to store user selections
let selectedCity = "";
let selectedCinema = "";
let selectedMovie = "";
let selectedSeat = "";

console.log("MOVIE BOOKING SYSTEM");

// STEP 1: City Choice
const citiesList = Object.keys(booking_dataset);
console.log(`Available Cities: ${citiesList.join(", ")}`);

rl.question("Enter City Name: ", (cityInput) => {
    
    // Find matching city (case-insensitive)
    const matchedCity = citiesList.find(c => c.toLowerCase() === cityInput.trim().toLowerCase());

    if (matchedCity) {
        selectedCity = matchedCity;
        console.log(`Selected City: ${selectedCity}\n`);

        // STEP 2: Cinema Choice
        const cinemaList = Object.keys(booking_dataset[selectedCity]);
        console.log(`Available Cinemas in ${selectedCity}: ${cinemaList.join(", ")}`);
        
        rl.question("Enter Cinema Name: ", (cinemaInput) => {
            
            // Find matching cinema (case-insensitive)
            const matchedCinema = cinemaList.find(c => c.toLowerCase() === cinemaInput.trim().toLowerCase());

            if (matchedCinema) {
                selectedCinema = matchedCinema;
                console.log(`Selected Cinema: ${selectedCinema}\n`);

                // STEP 3: Movie Choice
                const movieList = booking_dataset[selectedCity][selectedCinema];
                console.log(`Now Showing: ${movieList.join(", ")}`);
                
                rl.question("Enter Movie Name: ", (movieInput) => {
                    
                    // Find matching movie (case-insensitive)
                    const matchedMovie = movieList.find(m => m.toLowerCase() === movieInput.trim().toLowerCase());

                    if (matchedMovie) {
                        selectedMovie = matchedMovie;
                        console.log(`Selected Movie: ${selectedMovie}\n`);

                        // STEP 4: Seat Choice
                        const seatList = Object.keys(pricing_chart);
                        console.log("Seat Options: Standard (₹150) | Luxury (₹250) | VIP (₹400)");
                        
                        rl.question("Enter Seat Type: ", (seatInput) => {
                            
                            // Find matching seat type (case-insensitive)
                            const matchedSeat = seatList.find(s => s.toLowerCase() === seatInput.trim().toLowerCase());

                            if (matchedSeat) {
                                selectedSeat = matchedSeat;
                                const finalPrice = pricing_chart[selectedSeat];

                                // Final Success Ticket Print
                                console.log("\n-------------------------------------------");
                                console.log("TICKET BOOKING SUCCESSFUL!");
                                console.log(`City:       ${selectedCity}`);
                                console.log(`Cinema:     ${selectedCinema}`);
                                console.log(`Movie:      ${selectedMovie}`);
                                console.log(`Seat Type:  ${selectedSeat}`);
                                console.log(`Total Paid: ₹${finalPrice}`);
                                console.log("-------------------------------------------");
                                rl.close();
                            } else {
                                console.log("Error: Invalid seat type! Booking failed.");
                                rl.close();
                            }
                        });

                    } else {
                        console.log("Error: This movie is not playing at this cinema! Booking failed.");
                        rl.close();
                    }
                });

            } else {
                console.log("Error: Cinema not found! Booking failed.");
                rl.close();
            }
        });

    } else {
        console.log("Error: We do not provide services in this city! Booking failed.");
        rl.close();
    }
});
              
