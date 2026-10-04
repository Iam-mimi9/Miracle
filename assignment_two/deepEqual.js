function deepEqual(objA, objB) {
//to check if they are both equal
 if (objA == objB){
  return true
 }

 // checking if they are null or an object
 if (objA === null || typeof objA !== 'object' || objB === null || typeof objB !== 'object'){
  return false
 }

 // to get their keys
 const A = Object.keys(objA);
 const B = Object.keys(objB);

 // to check if their length are equal
 if (A.length !== B.length){
  return false;
 }

 // looping through each key and recursively check their values
 for (let key of A){
  if (!B.includes(key) || !deepEqual(objA[key], objB[key])){
    return false
  }
 
 return true
}
console.log(deepEqual({ a: 1, b: { c: 2 } },{ a: 1, b: { c: 2 } })) // true
console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 3 } })) // false
console.log(deepEqual({ a: 1 }, { a: 1, b: 2 }))}