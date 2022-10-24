const len = 7;
var y = 0, i = 0,q = 0 ,m=0,b =0;
var x = "" ;
var g = len;
var k = "";
var star = "";
if (g %2 != 0){
  g = g-1;
  g = g/2;
  for (i = 0; i<g; i++){
    k +="*";
    q += 1;
    console.log(k)
  }
  m = len - q;

  while (y <m){
    var star = "";
    for(x = 0; x <m-y;x++)star +="*";
    console.log(star);
    if(y <m) y+=1;
  }
}

