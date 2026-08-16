/*
Question 1: Cart Summary Calculator

Human Thought Process (Cashier Mindset)
"Jab main counter par bill banata hoon, toh main ek 
empty slip lekar baithta hoon jahan total count,
total price, aur tax add karta jata hoon. Har item 
par uski category dekhkar tax calculate karta hoon, aur end mein total bill hand-over kar deta hoon." 
*/

function calculateChartSummary(cart){
    let totalItems = 0;
    let subtotal = 0;
    let totalTax = 0;

    for(let item of cart){
        totalItems += item.qty;
        const itemCost = item.price * item.qty;
        subtotal += itemCost;

        let taxRate = 0;
        if(item.category === "electronics"){
            taxRate = 0.18;
        } else if (item.category === "clothing"){
            taxRate = 0.12;
        } else {
            taxRate = 0.05;
        }
        const itemTax = itemCost * taxRate;
        taxRate += itemTax;
    }

    return {
        totalItems: totalItems,
        subtotal: subtotal,
        totalTax: totalTax,
        grandTotal: subtotal + totalTax
    };
}
const cart = [
    { name: "Laptop", price: 50000, qty: 1, category: "electronics" },
    { name: "Shirt", price: 1500, qty: 2, category: "clothing" },
    { name: "Book", price: 500, qty: 3, category: "books" }
]
console.log(calculateChartSummary(cart));

/*
Question 2: Course - Student Inverter
Human Thought Process (Notice Board Mindset)
Phele list hai cource->Students. Mujhe chahiye student ->
*/