function getAverage(marks){
    //TODO : calculate the downward rounded average of the marks array
    let sum = 0;
    console.log(sum);
    for(let i = 0;i < marks.length ;i++){
       sum += marks[i];
       console.log(sum);
    }
    let mean = Math.floor(sum/marks.length);
     
    return mean;
  }

  let dil = getAverage([2,2,2,2]);
  console.log(dil);


// let string = "fokso";
// let len = string.length;
// console.log(len);