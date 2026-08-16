/*
Question 1: Cart Summary Calculator

Human Thought Process (Cashier Mindset)
"Jab main counter par bill banata hoon, toh main ek 
empty slip lekar baithta hoon jahan total count,
total price, aur tax add karta jata hoon. Har item 
par uski category dekhkar tax calculate karta hoon, aur end mein total bill hand-over kar deta hoon." 
*/
const cart = [
    { name: "Laptop", price: 50000, qty: 1, category: "electronics" },
    { name: "Shirt", price: 1500, qty: 2, category: "clothing" },
    { name: "Book", price: 500, qty: 3, category: "books" }
]
function calculateChartSummary(cart){
    let totalItems = 0;
    let subtotal = 0;
    let totalTax = 0;

    for(let item of cart){
        totalItems += item.qty;
        const itemCost = item.price * item.qty;
        subtotal += itemCost;

        let taxRate = 0;
        
    }
}