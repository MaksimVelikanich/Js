const len = 7;
var i =0,x = 0,y=0;
while (y <len){
var star = "",space = "";
for (i = 0;i < len+y;i+=2)space +=" "
for(x = 0; x <len-y;x++)star +="*";
console.log(space + star);
if(y <len) y+=2;
}
