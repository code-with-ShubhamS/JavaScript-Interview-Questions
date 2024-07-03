
function passValidator(str){
    if(str.length<8){
        return false;
}
        let upperCase= false;
        let lowerCase= false;
        let letter=false;

        for (let index = 0; index < str.length; index++) {
             let char =str.charAt(index)
            if(char > 0){  // always write it first becuse it caannot be accesed when we write it after char.toUpperCase
                letter=true;
            }   
            else if(char==char.toUpperCase()){
                upperCase=true;
            }
            else if(char==char.toLowerCase()){
                lowerCase=true;
            } 
            

            // if(upperCase && lowerCase && letter){
            //     return true;
            // }
        }
        return upperCase && lowerCase && letter
//         const upperCase= /[A-Z]/.test(str);
//         const lowerCase= /[a-z]/.test(str);
//         const letter=/[0-9]/.test(str)
//   return upperCase && lowerCase && letter;
}

// console.log("9">0)  true 
console.log(passValidator("Shubham12312"))

