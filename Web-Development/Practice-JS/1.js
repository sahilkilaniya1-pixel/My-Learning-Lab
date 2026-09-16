// Aapka data (string ya array)
const data = "0000001111111";
const getOneIndices = (input) => {
  const indices = [];
  
  // Ek simple loop jo bilkul natural lagta hai
  for (let i = 0; i < input.length; i++) {
    if (input[i] === '1') {
      indices.push(i);
    }
  }
  
  return indices;
};
const result = getOneIndices(data);
console.log("Indices of 1:", result);



const data = "0000001111111";
const indices = [...data].reduce((acc, char, index) => {
  if (char === '1') acc.push(index);
  return acc;
}, []);

console.log(indices);