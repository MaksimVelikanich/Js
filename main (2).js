const len = 7; 
let string = "";

for(let i = 0; i < len; i++) { 
  for(let j = 0; j < len; j++) { 
    string += "*";
  }
  string += "\n";
}
console.log(string);

