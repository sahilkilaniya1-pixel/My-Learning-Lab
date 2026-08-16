// let a = [1, 4, 3, 2, 5, 7, 6];
let a = [1,6,3,8,7,]
export function sort_array(arr) {
    for (let i = 0; i < arr.length -1 ; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
console.log(sort_array(a));