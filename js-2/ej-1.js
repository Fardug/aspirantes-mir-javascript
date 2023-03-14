
function sum(array){ 
    if (array.length === 0){
        return 0;
    }
    let total =0;
    for ( let num=0; num<array.length; num++ ){
        total += array[num];
    }
    return total;
  } 
  console.log(sum([1, 2, 3]));
  console.log(sum([10, 8, 12, 5]));
  console.log(sum([]));

         
