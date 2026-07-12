const numbersArray = [2, 4, 6, 2, 0, 56, 32, 65, 78, 65, 78, 95];
const mixedArray = [2, 4, 5, 3, 5, 3, 2, 5, "a", "b"];
const namesList = ["Aayush", "Sahil", "Akshya"];
const usersDataset = [
  { name: "John", age: 17, isActive: true },
  { name: "Jane", age: 22, isActive: false },
  { name: "Bob", age: 19, isActive: true },
  { name: "Alice", age: 25, isActive: true }
];
const ascendingArray= [...numbersArray].sort((x,y)=>x-y);
console.log(ascendingArray);

const descendingArray=[...numbersArray].sort((x,y)=> y-x);
console.log(descendingArray);


const sortedDesc = [...numbersArray].sort((x,y)=> y-x);
const productOfTowlargest =sortedDesc[0]* sortedDesc[1];
console.log(productOfTowlargest);


const sortedAsc = [...numbersArray].sort((x,y) => x-y);
const productOfTowsmallest = sortedAsc[0]* sortedAsc[sortedAsc.length-1];
console.log(productOfTowlargest);


const serializedString = mixedArray.join(",");
console.log(serializedString);


const stringSample = "sahil";
const deserializedArray = stringSample.split("");
console.log(deserializedArray);

const transformationResult = namesList.map(name => name.length);
console.log(transformationResult);


const matchUser = usersDataset.find(user => user.isActive === true && user.age<18);
console.log(matchUser);


const functioncheck = usersDataset.every(user => user.isActive === true);
console.log(functioncheck);


const existenceEvaluation = usersDataset.some(user => user.age < 18);
console.log(existenceEvaluation);


const filterSubset =usersDataset.filter(user => user.isActive ===true);
console.log(filterSubset);


const expenseList = [100, 250, 500, 80];
const runningGrandTotal = expenseList.reduce((accumulator, current) => accumulator + current, 0);
console.log(runningGrandTotal);


console.log("13. Stream Processing Output Initialization:");
fruits.forEach((fruit, index) => {
  console.log(` -> Element detected at positional index [${index}]: ${fruit}`);
});



const genericScore = [45,72, 98, 60];
const targetIndexResult = genericScore.findIndex(score => score <=75);
console.log(targetIndexResult);


const logisticCart = ["laptop", "Mouse", "keyboard"];
console.log(logisticCart.includes("trimer"));
console.log(logisticCart.includes("mouse"));