// =========== 1. REVERSE STRING ========== //

function reverseString(str) {
    // Split the string out into an array
    const strArr = str.split('')
    // Reverse the array
    strArr.reverse()
    // Join the elements of the array back into a string
    return strArr.join('')
}

// const output = reverseString('hello');

// *** Clean version ***

function reverseString2(str) {
    return str
        .split('')
        .reverse()
        .join('')
}

// QUESTION: Array Protypes vs built in JS functions?

// const output = reverseString2('hello again');

// *** Without Array Method ***

function reverseStrForLoop (str) {
    let revString = ''
    for (let i = str.length - 1; i >= 0; i--) {
        revString = revString + str[i]  
    }
    return revString
}

// const output = reverseStrForLoop('hello for the third time')


function reverseStrForOfLoop (str) {
    let revString = ''
    for (let char of str) {
        revString = char + revString
    }
    return revString
}

// const output = reverseStrForOfLoop('This is how a forOf loop works')


////////////////// HIGHER ORDER ARRAY METHODS ===> String must be turned into an Array

function reverseStrForEach(str) {
    let revString = ''
    str.split('').forEach((char) => revString = char + revString)
    return revString
}

// const output = reverseStrForEach('This is a .forEach function')

// QUESTION: How to use the .reduce array function?

// =========== 2. VALIDATE PALINDROME ========== //

function isPalindrome(str) {
    let reversedString = str.split('').reverse().join('')
    return reversedString === str
}

// const output = isPalindrome('racecar')
// const output = isPalindrome('hello')

function isIntPalindrome(int) {
    let revString = int.toString().split('').reverse().join('')
    let revInt = parseInt(revString)
    return revInt === int
}

// const output = isIntPalindrome(101)


// =========== 3. CAPITALIZE LETTERS ========== //

// Find an extension that autocompletes prototypes and Array functions

function capitalizeLetters(str) {
    const strArr = str.toLowerCase().split(' ')

    for (let i = 0; i < strArr.length; i++) {
        strArr[i] = strArr[i].substring(0,1).toUpperCase() + strArr[i].substring(1)
    }

    return strArr.join(' ')
}

const output = capitalizeLetters('how wEll is this woRking')

// =========== Call function ========== //

console.log(output);

