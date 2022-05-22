var strStr = function (haystack, needle) {
    if(haystack === '' ) return -1
    if(needle === '' ) return 0

    let index = -1
    for(let i = 0 ; i< (haystack.length - needle.length + 1); i++){
        const subString = haystack.slice(i,i+ needle.length)
        if(subString === needle){
            return i
        }
    }

    return index
};

haystack = "aaaaa"
needle = "bba"
console.log(strStr(haystack, needle))