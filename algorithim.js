var v1 = [
  [2, 3],
  [5, 3],
  [6, 4],
  [7, -8],
];
var v2 = [
  [4, 5],
  [5, 5],
  [7, 6],
  [8, 7],
];

function dot_product(v1, v2) {
  var dotProduct = 0;
  for (i in v1) {
    dotProduct = dotProduct + v1[i] * v2[i];
  }
  return dotProduct;
}

function nVector(arr1, arr2) {
  console.log("Dot Product:")
  for (let i = 0; i < arr1.length; i++) {
    console.log(
      `v1: [${arr1[i]}] v2: [${arr2[i]}] equal ${dot_product(arr1[i], arr2[i])}`
    );
  }
}
nVector(v1, v2);
