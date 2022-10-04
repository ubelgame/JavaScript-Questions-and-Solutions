// Write a code so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// solution
function reversal(str){
    let create = str.split('').reverse();
    let newString = create.join('');
    return newString;
    // console.log(newString);

}
 reversal('booklet');

 