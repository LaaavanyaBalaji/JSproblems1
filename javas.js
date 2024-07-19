//array intersection
let arr1=[1,2,3,4,5,6];
let arr2=[2,4,6,8,10];
let newarr=arr1.filter((element)=>arr2.includes(element));
console.log(newarr);

// //longest
function longest(str) {
    let arr = str.split(' ');
    let long= 0;
    let arrl=null;
    for(let i = 0; i < arr.length; i++){
      if(arr[i].length > long){
      long = arr[i].length;
      arrl=arr[i];
       }
    }
    return arrl ;
  }
  console.log(longest("I am Laaavanya Balaji"));


  //finding difference between two arrays
  let arra1=[1,2,3,4,5,6];
let arra2=[2,4,6,8,10];
let newarra=arra1.filter((element)=>!arra2.includes(element));
let newarra1=arra2.filter((element)=>!arra1.includes(element));


console.log(newarra,newarra1);

//rotatearray
function rotateArray(arr, rotateBy) {
	const n = arr.length;
	rotateBy %= n;

	return arr.slice(rotateBy).concat(arr.slice(0, rotateBy));
}

const originalArray = [1, 2, 3, 4, 5];
const rotatedArray = rotateArray(originalArray, 2);
console.log(rotatedArray);

//remove duplicates
let arraydup=[1,2,2,3,3,4,4,5]
console.log(...new Set(arraydup))








