var i = 0,
  j = 0;

const len = 7;
var space = "",
  star = "";

while (i < len) {
  space = "";
  star = "";
  for (j = 0; j < len - i; j=j+2) space += " ";
  for (j = 0; j <  i + 1; j++) star += "*";
  console.log(space + star);
  if (i < len)i+=2;
}
