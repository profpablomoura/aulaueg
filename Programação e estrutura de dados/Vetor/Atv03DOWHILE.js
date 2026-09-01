const array = [1,2,3,4,5,6,7,8,9,10];

//Manipular array usando do while

let str3 = "Array = |";
let pos3 = 0;
do{
    str3 += array[pos3] + " | ";
    pos3++;
}while(pos3<array.length)

console.log(str3);