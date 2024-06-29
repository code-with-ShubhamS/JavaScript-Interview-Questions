/* The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (GreenHouse (length less than 6), BlueHouse(length less than 8), YellowHouse(length less than 12), or RedHouse(length greater than or equal to 12)) based on the length of their names.

Input => let StudentsName=["shubham","rahulSingh","shivamChaudhary","deepakBhardwaj","ayushSingSemwal","ABhishekSinghChauCHan","shiv","melody","dineshPanvar","simranSingh","pankajSinghBisht"]

 Output=>[
  { NAME: 'shubham', HOUSE: 'sivajiHouse', length: 7 },
  { NAME: 'rahulsd', HOUSE: 'sivajiHouse', length: 7 },
  { NAME: 'shivamdsvdvvd', HOUSE: 'kingHouse', length: 13 },
  { NAME: 'deepak', HOUSE: 'tagorHouse', length: 6 },
  { NAME: 'ayush', HOUSE: 'tagorHouse', length: 5 },
  { NAME: 'dodo', HOUSE: 'tagorHouse', length: 4 },
  { NAME: 'shiv', HOUSE: 'tagorHouse', length: 4 },
  { NAME: 'melodyddv', HOUSE: 'ashokHouse', length: 9 },
  { NAME: 'dineshsdvds', HOUSE: 'ashokHouse', length: 11 },
  { NAME: 'simran', HOUSE: 'tagorHouse', length: 6 },
  { NAME: 'pankajsdvdvdsddsd', HOUSE: 'kingHouse', length: 17 }
]
  
*/

let house=[];
function setHouseName(Students){
    Students.forEach(element => {
        if(element.length<=6){
            house.push({NAME:element,HOUSE:"tagorHouse",length:element.length})
        }
        else if(element.length <8){
            house.push({NAME:element,HOUSE:"sivajiHouse",length:element.length})
        }
        else if(element.length < 12){
            house.push({NAME:element,HOUSE:"ashokHouse",length:element.length})
        }
        else{
            house.push({NAME:element,HOUSE:"kingHouse",length:element.length})
        }
    });
}

setHouseName(Students);
console.log(house)