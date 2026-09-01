const array = [1,2,3,4,5,6,7,8,9,10];

//Manipular array usando while

let str2 = "Array = |";
let pos2 = 0;
while(pos2<array.length){
    str2 += array[pos2] + " | ";
    pos2++;
}

console.log(str2);