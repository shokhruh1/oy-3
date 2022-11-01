// let a, b, z;

// a = 100;
// b = 305;
// z = a + b;
// console.log(z);

// var x = myFunction(50, 5);
// document.getElementById("demo").innerHTML = x;

// function myFunction(a, b) {
//   return a * b;
// }

let n = +prompt(" N son kiritig: ");

for (i = 1; n >= i; i++) {
  a = true;
  for (b = 2; b < i; b++) {
    if (i % b == 0) {
      a = false;
      break;
    }
  }
  if (a == false) {
    console.log(i);
  }
}
