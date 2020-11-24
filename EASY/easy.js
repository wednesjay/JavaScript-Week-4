const arr1 = [4, 8, 12];
const arr2 = [22, 3, 5];
const arr3 = [1, 2, 3, 4, 5];

let total = 0;
function getAvg(arr) {
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  let avg = total / arr.length;
  return avg;
}

console.log(getAvg(arr1));
// console.log(getAvg(arr2));
// console.log(getAvg(arr3));
