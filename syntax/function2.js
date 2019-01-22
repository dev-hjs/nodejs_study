import { setupMaster } from "cluster";

console.log(Math.round(1.6)); //2 round라는 함수는 반올림해주는 함수
console.log(Math.round(1.6)); //1


function sum(first , second){ //
    return first+second;
}
 
console.log(sum(2,4)); // argument