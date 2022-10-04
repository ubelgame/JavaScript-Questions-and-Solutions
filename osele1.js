function words(str) {
    // let wordsArray = string.split('');
    curseWord = 'fuck';
    let curses = str.match(/fuckFUCK/gi);
    if(curses !== true) {
        let cursed = 'x' + curseWord.length;
        return curses
    }else{
        return str
    }

}

let word = words('Fuck off pit');
console.log(word);

// function word(str) {
//     let curse = 'Fuck';
//     let indexOfCurse = str.indexOf(curse);
//     if(indexOfCurse !== -1){
//         let indexOfCurse = ('x' + curse.length);
//         return indexOfCurse + str
//     }else if (indexOfCurse === -1) {
//         return str;
//     }
// }
// let wording = word('Fuck off pit');
// console.log(wording);