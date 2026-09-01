const array = [1,2,3,4,5,6,7,8,9,10];

//Manipular array usando for

let str1 = "Array = |";
for (let pos1 = 0; pos1 < array.length; pos1++){
    str1 += array[pos1] + "|";

}

console.log(str1);