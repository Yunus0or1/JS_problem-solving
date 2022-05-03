
function backspaceCompare(s, t) {
    const sStack = []
    const tStack = []

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '#' && sStack.length === 0) {
            continue
        }
        else if (s[i] === '#' && sStack.length > 0) {
            sStack.pop()
        }
        else {
            sStack.push(s[i])
        }
    }

    for (let i = 0; i < t.length; i++) {
        if (t[i] === '#' && tStack.length === 0) {
            continue
        }
        else if (t[i] === '#' && tStack.length > 0) {
            tStack.pop()
        }
        else {
            tStack.push(t[i])
        }
    }
    if(JSON.stringify(sStack) === JSON.stringify(tStack)){
        return true
    }

    return false
}


let s = "a#c"
let t = "b"

console.log(backspaceCompare(s, t))