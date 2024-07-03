let arr=[1,2,1,3,-4,-5];

function sum(arr){
    let ans=0;
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if(element < 0){
            console.log(ans)
            return;
        }
        else{
            ans+=element;
        }
    }
   
}
sum(arr)