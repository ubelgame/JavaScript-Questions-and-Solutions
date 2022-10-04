// Write a code so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// solution
function reversal(str){
    let reverse = '';
    for(var i = str.length - 1; i >= 0; i--)
        reverse += str[i];
        // return reverse;
        console.log(reverse);
    
}

reversal('gonnies');

