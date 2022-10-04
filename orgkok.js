function arrayDifference(a, b) {
    let empty = [];
    for (let i = 0; i < a.length; i++) {
        if (b.indexOf(a[i]) === -1 ) {
            empty.push(a[i]);
        }
    }
    return empty;
}

let dif = arrayDifference([1, 2, 4, 4, 5], [1, 2, 4, 6, 8]);
console.log(dif);



// function arrayOfDif(a,b){
//     return a.filter(function (x) {
//         return !b.includes(x)
//     });
// }
// let some = arrayOfDif([1,2,4,4,5],[1,2,4,6,8]);
// console.log(some);