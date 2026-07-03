const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// ==========================================
// GROUP 1: DATA CONFIGURATION
// ==========================================
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

// Variables to store final selections
let selectedCity = "", selectedCinema = "", selectedMovie = "", selectedSeat = "";

console.log("         MOVIE BOOKING SYSTEM            ");

// ==========================================
// GROUP 2: INTERACTIVE PROCESS (BUILT-IN FUNCTIONS)
// ==========================================

// STEP 1: City Selection
const citiesList = Object.keys(booking_dataset);
// Using .map() to format and display each city cleanly
console.log(`Available Cities: ${citiesList.map(city => `📍 ${city}`).join(" | ")}`);

rl.question("👉 Enter City Name: ", (cityInput) => {
    
    // Using .find() built-in function for case-insensitive city matching
    const matchedCity = citiesList.find(c => c.toLowerCase() === cityInput.trim().toLowerCase());

    if (matchedCity) {
        selectedCity = matchedCity;
        console.log(`City Confirmed: ${selectedCity}\n`);

        // STEP 2: Cinema Selection
        const cinemaList = Object.keys(booking_dataset[selectedCity]);
        console.log(`Available Cinemas: ${cinemaList.map(cinema => `🏢 ${cinema}`).join(" | ")}`);
        
        rl.question("Enter Cinema Name: ", (cinemaInput) => {
            
            // Using .find() for case-insensitive cinema matching
            const matchedCinema = cinemaList.find(c => c.toLowerCase() === cinemaInput.trim().toLowerCase());

            if (matchedCinema) {
                selectedCinema = matchedCinema;
                console.log(`Cinema Confirmed: ${selectedCinema}\n`);

                // STEP 3: Movie Selection
                const movieList = booking_dataset[selectedCity][selectedCinema];
                console.log(`Now Showing: ${movieList.map(movie => `🎬 ${movie}`).join(" | ")}`);
                
                rl.question("Enter Movie Name: ", (movieInput) => {
                    
                    // Using .find() for case-insensitive movie matching
                    const matchedMovie = movieList.find(m => m.toLowerCase() === movieInput.trim().toLowerCase());

                    if (matchedMovie) {
                        selectedMovie = matchedMovie;
                        console.log(`Movie Confirmed: ${selectedMovie}\n`);

                        // STEP 4: Seat Selection
                        const seatList = Object.keys(pricing_chart);
                        // Using .map() to format seat types alongside their pricing dynamically
                        console.log(`Seat Options: ${seatList.map(seat => `${seat} (₹${pricing_chart[seat]})`).join(" | ")}`);
                        
                        rl.question("Enter Seat Type: ", (seatInput) => {
                            
                            // Using .find() for case-insensitive seat matching
                            const matchedSeat = seatList.find(s => s.toLowerCase() === seatInput.trim().toLowerCase());

                            if (matchedSeat) {
                                selectedSeat = matchedSeat;
                                
                                // GROUP 3: FINAL OUTPUT
                                printTicket(pricing_chart[selectedSeat]);
                            } else {
                                console.log("Error: Invalid seat type! Booking failed.");
                                rl.close();
                            }
                        });

                    } else {
                        console.log("Error: Movie not found in this cinema! Booking failed.");
                        rl.close();
                    }
                });

            } else {
                console.log("Error: Cinema not found! Booking failed.");
                rl.close();
            }
        });

    } else {
        console.log("❌ Error: Service not available in this city! Booking failed.");
        rl.close();
    }
});

// ==========================================
// GROUP 3: TICKET GENERATION (HELPER FUNCTION)
// ==========================================
function printTicket(finalPrice) {
    console.log("\n-------------------------------------------");
    console.log("TICKET BOOKING SUCCESSFUL! 🎉");
    console.log(`City:       ${selectedCity}`);
    console.log(`Cinema:     ${selectedCinema}`);
    console.log(`Movie:      ${selectedMovie}`);
    console.log(`Seat Type:  ${selectedSeat}`);
    console.log(`Total Paid: ₹${finalPrice}`);
    console.log("-------------------------------------------");
    rl.close();
}