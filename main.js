const len = 7;
let n = len;
var i,j,k;
let string = "";
for (let i = 1; i <= n; i++) {

  for (let j = 0; j < n - i; j++) {
    string += " ";
  }
  for (let k = 0; k < i-3; k++) {
    string += "*";
  }
  string += "\n";
}
for (let i = 1; i <= n - 1; i++) {
  for (let j = 0; j < i; j++) {
    string += " ";
  }
  for (let k = 3; k < n - i; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);