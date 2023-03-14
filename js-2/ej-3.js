function maxIndex(array){ 
    if (array.length === 0)return -1;
    let indmax = 0;
    let mayor=array[0];

    for (let i=1; i< array.length; i++){
        if (array[i] > mayor]){
        mayor=array[i];    
        indmax= i;
        }
    }
    return indmax;
}

console.log(maxIndex([]));
console.log(maxIndex([1, 3, 2])); 
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4]));
