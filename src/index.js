const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
   
    const massiveExpr = expr.slice('');
    let str='';

    for(let i = 0; i < (massiveExpr.length / 10); i++){
        let letter = massiveExpr.slice(i*10, (i+1)*10);
        if(letter[0]=="*"){
            str=str+" ";
        }
        else{
            let mor='';
            for(let j=letter.indexOf(1,0); j<letter.length; j=j+2){
                if(letter[j+1] == 0){
                    mor=mor+'.';
                    
                }
                else{
                    mor=mor+'-';
                    
                }
               
            }
            str= str+MORSE_TABLE[mor];
        }
       
        
    }
    return str;
}

module.exports = {
    decode
}