// Complete the getTotalX function in the editor below. It should return the number of integers that are betwen the sets.

// getTotalX has the following parameter(s):

// a: an array of integers
// b: an array of integers

function getTotalX(a, b) {
    let x = a[0]
    let y = b[b.length - 1]
    let count = 0
    for (let i = x; i <= y; i++) {
        let chk = 0
        for (let j = 0; j < b.length; j++) {
            if (b[j] % i !== 0) {
                chk = 1
                break
            }
        }
        let chk1 = 0
        for (let k = 0; k < a.length; k++) {
            if (i % a[k] !== 0) {
                chk1 = 1
                break
            }
        }
        if (chk == 0 && chk1 == 0) {
            count++
        }
    }
    return count


}