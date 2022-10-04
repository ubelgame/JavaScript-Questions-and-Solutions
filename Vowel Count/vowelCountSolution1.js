// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels 
// The input string will only consist of lower case letters and/or spaces.

// solution
function getCount(str){
    let vowelsCount = 0;
    let vowels = ['a','e','i','o','u'];
    let stringArray = str.split('');
    for (let i = 0; i < stringArray.length; i++){
        for(let j = 0; j < vowels.length; j++){
            if(stringArray[i] === vowels[j]){
                vowelsCount++;
            }
        }
    }

// return vowelsCount;
console.log(vowelsCount);
}

getCount('babe');