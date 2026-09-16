const data = "0000001111111";

const getIndices = (arr) => {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "1") {
      output.push(i);
    }
  }
  return output;
};

const result = getIndices(data);
console.log(result);
