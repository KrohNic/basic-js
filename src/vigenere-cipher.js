class VigenereCipheringMachine {
    constructor(isDirect = true) {
        this.isDirect = isDirect;
    }
    
    encrypt(message, key) {
        if(!message || !key)
            throw new Error();
        
        const KEY = key.toUpperCase();
        let result = '';
        let i = -1;
        
        for(let letter of message.toUpperCase()) {
            if( /^[^a-z]{1}$/i.test(letter) )
                result += letter;
            else
                result += String.fromCharCode(
                    (letter.charCodeAt(0) + KEY.charCodeAt(++i % KEY.length) - 130) % 26 + 65 
                );
        }
        
        return result;
    }

    decrypt(message, key) {
        if(!message || !key)
            throw new Error();
        
        const KEY = key.toUpperCase();
        let result = '';
        let i = -1;
        
        if(!this.isDirect)
            message = message.split('').reverse().join('');
        
        for(let letter of message.toUpperCase()) {
            if( /^[^a-z]{1}$/i.test(letter) )
                result += letter;
            else
                result += String.fromCharCode(
                    (letter.charCodeAt(0) - KEY.charCodeAt(++i % KEY.length) + 26) % 26 + 65 
                );
        }
        
        if(!this.isDirect)
            result = result.split('').reverse().join('');
        
        return result;
    }
}

module.exports = VigenereCipheringMachine;
