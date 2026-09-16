const data = "0000001111111";
const getIndices = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "1") {
      return i;
    }
  }
  return 1;
};
const result = getIndices(data);
console.log(result);
