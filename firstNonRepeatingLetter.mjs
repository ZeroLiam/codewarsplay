/**
 * Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

 */
import minimist from 'minimist';
 const args = minimist(process.argv.slice(2));
console.log(args);

if(args["_"][0] === 'firstnonrepeatingletter'){
    first_non_repeating_letter(args["_"][1]);
}

 function first_non_repeating_letter(str){
     let tempStr = str.toLowerCase();
     let index = 0;
     let obj = {};
     let res;

     for(let char of tempStr){
        if(!obj[char]) obj[char] = {count: 0, position: index};
        
        obj[char] = {count: obj[char].count++, position: index};
        obj[char].position = index;
        obj[char].count++;
        index++;
     }
    for(let item of Object.keys(obj)){
        if(obj[item].count === 1){
            res = obj[item].position;
            break;
        }
    }
    return !str[res] ? '' : str[res];
 }

