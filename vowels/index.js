// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    const arr = str.split('')
    const vowels = ['a','e','i','o','u']
    let count = 0

    for (let i=0; i<=arr.length; i++) {
        for (let i=0; i<=vowels.length; i++) {
            if (arr[i] === vowels[i]) {
                count++
            }
            else {
                count
            }
        }
    }
    console.log(count)
}

module.exports = vowels;
