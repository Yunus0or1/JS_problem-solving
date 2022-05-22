var lengthOfLastWord = function(s) {

    const words = s.split(' ')

    for(let i = words.length - 1 ; i >=0; i --){
        if(words[i] != ''){
            return words[i].length
        }
    }

};

s = "hello world"
console.log(lengthOfLastWord(s))