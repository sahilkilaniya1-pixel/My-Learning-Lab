const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// ==========================================
// GROUP 1: DATABASE & CONFIGURATION
// ==========================================
const PRODUCT_INVENTORY = {
    "laptop": 50000,
    "phone": 20000,
    "watch": 5000,
    "headphones": 2000
};

const VALID_PROMO_CODES = ["SAVE10", "SUPER50", "DIWALI20"];

// User selection state
let userCart = [];
let userType = "";
let appliedPromo = "";

console.log("    🛒 ADVANCED SHOPPING CART SYSTEM    ");

// ==========================================
// GROUP 2: INTERACTIVE PROCESS (ADVANCED INBUILT FUNCTIONS)
// ==========================================

// STEP 1: Add Items to Cart
const availableProducts = Object.keys(PRODUCT_INVENTORY);
console.log(`Available Products: ${availableProducts.map(p => `${p} (₹${PRODUCT_INVENTORY[p]})`).join(" | ")}`);
console.log("(Note: Separate multiple items with commas, e.g., laptop, watch, phone)");

rl.question("Enter products to add to your cart: ", (cartInput) => {
    
    // `.split()` aur `.map()` ka use karke input ko array mein badla aur clean kiya
    const inputItems = cartInput.split(",").map(item => item.trim().toLowerCase());

    // `.filter()` aur `.includes()` se valid products ko nikaala
    userCart = inputItems.filter(item => availableProducts.includes(item));

    if (userCart.length > 0) {
        console.log(`Items added to cart: ${userCart.join(", ")}`);
        // Agar user ne kuch galat products likhe, toh filter unhe hata dega
        const invalidItems = inputItems.filter(item => !availableProducts.includes(item));
        if (invalidItems.length > 0) console.log(`Ignored invalid items: ${invalidItems.join(", ")}`);

        // STEP 2: User Type Selection
        console.log("\nUser Types: Regular | Premium (Premium gets extra 10% off)");
        rl.question("Enter your Membership Type: ", (typeInput) => {
            
            const cleanType = typeInput.trim().toLowerCase();
            
            if (cleanType === "regular" || cleanType === "premium") {
                userType = cleanType;
                console.log(`Membership set to: ${userType}\n`);

                // STEP 3: Promo Code
                console.log(`Available Promos: ${VALID_PROMO_CODES.join(", ")} (Or type 'NONE')`);
                rl.question("Enter Promo Code: ", (promoInput) => {
                    
                    const cleanPromo = promoInput.trim().toUpperCase();

                    // `.includes()` ka use karke check kiya promo code valid hai ya nahi
                    if (cleanPromo === "NONE" || VALID_PROMO_CODES.includes(cleanPromo)) {
                        appliedPromo = cleanPromo === "NONE" ? "" : cleanPromo;
                        
                        // GROUP 3: CALCULATIONS & TICKET
                        processOrder();
                    } else {
                        console.log("Error: Invalid Promo Code! Order cancelled.");
                        rl.close();
                    }
                });

            } else {
                console.log("Error: Invalid Membership Type! Order cancelled.");
                rl.close();
            }
        });

    } else {
        console.log("Error: Cart is empty or no valid products selected! Order cancelled.");
        rl.close();
    }
});

// ==========================================
// GROUP 3: ADVANCED CALCULATIONS & BILL GENERATION
// ==========================================
function processOrder() {
    // 1. .reduce() ka use karke cart ka Total Price calculate kiya
    const subTotal = userCart.reduce((sum, item) => sum + PRODUCT_INVENTORY[item], 0);

    // 2. Conditional Pricing/Discounts
    let membershipDiscount = userType === "premium" ? subTotal * 0.10 : 0; // 10% for Premium
    let promoDiscount = appliedPromo === "SAVE10" ? subTotal * 0.10 : 
                        appliedPromo === "SUPER50" ? subTotal * 0.50 : 
                        appliedPromo === "DIWALI20" ? subTotal * 0.20 : 0;

    const totalDiscount = membershipDiscount + promoDiscount;
    const finalBill = subTotal - totalDiscount;

    // Final Bill Print
    console.log("\n-------------------------------------------");
    console.log("FINAL INVOICE ");
    console.log(`Items Ordered:   ${userCart.join(", ")}`);
    console.log(`Subtotal:        ₹${subTotal}`);
    console.log(`Member Discount: -₹${membershipDiscount} (${userType.toUpperCase()})`);
    if (appliedPromo) console.log(`Promo Discount:  -₹${promoDiscount} (${appliedPromo})`);
    console.log("-------------------------------------------");
    console.log(`TOTAL PAYABLE:   ₹${finalBill}`);
    console.log("-------------------------------------------");
    rl.close();
}