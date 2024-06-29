function sort(array){
    let i=0
  while (i<array.length) {
    for (let index = 0; index < array.length; index++) {
        if(array[index] > array[index+1]){
            let temp=array[index];
            array[index]=array[index+1];
            array[index+1]=temp;
        }     
    }
    i++;
  }
 return array;
}
function op(){
    let sortArray=sort([12,32,1,34,54,23,54,56])
    let ansArr=[]
    let previous=null;
    sortArray.forEach(element => {
        if(element!=previous){
            previous=element;
            ansArr.push(element*2);
        }
        else{
            ansArr.push(element)
            previous=element;
        }
    });
    console.log(ansArr)
}
op();

