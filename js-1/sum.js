function suma(num){
    var sumatoria = 0;
    for (var i =1; i<= num;i++){ 
    sumatoria += i;
    }
    return sumatoria;
}

console.log(suma(4));
console.log(suma(10));
console.log(suma(15));