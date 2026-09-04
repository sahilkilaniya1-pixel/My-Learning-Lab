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
Phele list hai cource->Students. Mujhe chahiye student -> Cources.
Main student ka naam boluga, jaise Sahil. pucho 'kya sahil meri register notebook mein phele se hai?'
- Agar nahi, toh phele sahil ka naam likho aur ek khali page do.
-Phir Sahil ke page par current cource ka naam write down kar do.
*/
function invertCourceData(courceData){
    const studentMap = {};
    for(let cource in courceData){
        const studentArray = courceData[cource];

        for(let student of studentArray){
            if(studentMap[student]===undefined){
                studentMap[student] = [];
            }
            studentMap[student].push(cource);
        }
    }
    return studentMap;
}
const courceData = {
    "JavaScript": ["Sahil", "Amit", "Priya"],
    "React": ["Sahil", "Priya"],
    "Node.js": ["Amit", "Rohan"]
};
console.log(invertCourceData(courceData));


/*
Question 3: Sensitive Data Masker
mere pass confidential user files hain. public display
ke liye mujhe ek bilkul nayi clean copy banani hai.
main purani  file ko overwrite nahi karuga . simple ek naya blank paper loonga, sirf allowed properties(id, name, role) copy karunga, aur confidential keys (password) ko original file mein hi rehene dunga.
*/