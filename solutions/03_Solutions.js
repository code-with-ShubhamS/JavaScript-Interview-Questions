const str = "shubham";

function finalStr(str) {
    // console.log(str.split('').reverse().join('')); //reverse string in short way
    
  let reverseStr = "";
  for (let index = str.length - 1; index >= 0; index--) {
    reverseStr = reverseStr + str.charAt(index);
  }
  console.log(str.concat(reverseStr))
}

finalStr(str)
