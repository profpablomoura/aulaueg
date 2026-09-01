const array = [1,2,3,4,5,6,7,8,9,10];

//Manipular array usando for of - ele varre todo o vetor, não tem como começar do meio do vetor

let str4 = "Array = |";
for (const elemento of array){
    str4 += elemento + " | ";
}

console.log(str4);