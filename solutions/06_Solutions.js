function vovels(str){
    let count=0;
    for (let index = 0; index < str.length; index++) {
        const char = str.charAt(index).toLowerCase();
        if(char=='a' ||char=='e' ||char=='i' ||char=='o' ||char=='u' ){
            count++;
        }   
    }
    return count;
}

console.log(vovels("AeIouAA"))