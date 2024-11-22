// Bài 1a
function sum1ToN(number) {
    if (number < 0 || number > 1000) {
        console.log('Invalid input');
        return;
    }
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    console.log(sum);
    return sum;
}

// sum1ToN(5);
// sum1ToN(10);

// Bài 1b
function sumTheDivisorsOfn(number) {
    let sum = number;
    for (let i = 1; i <= number / 2; i++) {
        if (number % i == 0) {
            sum += i;
        }
    }
    return sum;
}
 
// console.log(sumTheDivisorsOfn(6))
console.log(sumTheDivisorsOfn(16))

// 16: 1, 2, 4, 8, 16


// Bài 1c
function sumTheDigitsOfn(number) {
    let sum = 0;
    while (number > 0) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    console.log(sum);
}

sumTheDigitsOfn(123);
sumTheDigitsOfn(456);

// Bài 1d, 2a
function LargestDigitOfn(number) {
    let max = 0;
    while (number > 0) {
        let currentNumber = number % 10;
        if (currentNumber > max) {
            max = currentNumber;
        }
        number = Math.floor(number / 10);
    }
    console.log(max);
}
LargestDigitOfn(123123123);
LargestDigitOfn(4564564569);

// Bài 2b
function numToArray(number) {
    let array = []
    while (number > 0) {
        array.push(number % 10);
        number = Math.floor(number / 10);
    }
    return array;
}

// Bài 5
function sortArray(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] < array[j]) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}

function findSecondLargestDigitOfn(number) {
    let array = numToArray(number);
    let sortedArray = sortArray(array);
    return sortedArray[1];
}

// Bài 2c
function findSmallestDigitOfn(number) {
    let array = numToArray(number);
    let sortedArray = sortArray(array);
    return sortedArray[sortedArray.length - 1];
}

// Bài 3a
function isPrime(number) {
    if (number < 2) {
        return false;
    }
    if (number === 2) {
        return true;
    }
    if (number % 2 === 0) {
        return false;
    }
    for (let i = 3; i <= Math.sqrt(number); i += 2) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

// Bài 2d
function getAllPrimeDigitOfn(number) {
    let array = numToArray(number);
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (isPrime(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}

console.log(getAllPrimeDigitOfn(123456789).join(''));

// Bài 3b
function isPerfectNumber(number) {
    return sumTheDivisorsOfn(number) == 2 * number;
}

// Bài 3c
function isSquareNumber(number) {
    return Math.sqrt(number) % 1 === 0;
}

// Bài 4a
function reverseString(string) {
    let result = '';
    for (let i = 0; i < string.length; i++) {
        result = string[i] + result;
    }
    return result;
}

// Bài 4b. delete all " " in string
function deleteSpace(string) {
    let result = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== ' ') {
            result += string[i];
        }
    }
    return result;
}

//
function isEqualsString(string1, string2) {
    if (string1.length !== string2.length) {
        return false
    }
    for (let i = 0; i < string1.length; i++) {
        if (string1[i] !== string2[i]) {
            return false;
        }
    }
    return true;
}

// Bài 4c.
function isPalindrome(string) {
    return isEqualsString(string, reverseString(string));
}

function getSubString(string, start, end) {
    let result = '';
    for (let i = start; i < end; i++) {
        result += string[i];
    }
    return result;
}

// Bài 4d. Find the longest palindrome in a string
function longestPalindrome(string) {
    let result = '';
    for (let i = 0; i < string.length; i++) {
        for (let j = i; j < string.length; j++) {
            let subString = getSubString(string, i, j + 1);
            if (isPalindrome(subString) && subString.length > result.length) {
                result = subString;
            }
        }
    }
    return result;
}

// Bài 5. dòng 74

// Bài 6a.
function factorial(number) {
    let result = 1; 
    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    return result;
}

// Bài 6b. Giống bài 1c

// Bài 7. input n, output fibonacci(n)
function fibonacci(number) {
    if (number == 0) {
        return 0;
    }
    if (number == 1) {
        return 1;
    }
    let a = 0;
    let b = 1;
    let c;
    for (let i = 2; i <= number; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return c;
}

function fibonacciArray(number) {
    let arr = [];
    for (let i = 0; i <= number; i++) {
        arr.push(fibonacci(i));
    }
    return arr;
}

console.log("Fibonacci: ");
console.log(fibonacciArray(10));

// Bài 8a. "ueoai"
function isVowel(character) {
    switch (character) {
        case 'u':
        case 'e':
        case 'o':
        case 'a':
        case 'i':
            return true;
    }
    return false;
}

function countVowel(string) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (isVowel(string[i])) {
            count++;
        }
    }
    return count;
}

// Bài 8b. count exist
function countExist(string, character) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === character) {
            count++;
        }
    }
    return count;
}

// Bài 8c. Đếm số ký tự xuất hiện nhiều nhất
function countMostExist(string) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        let currentCount = countExist(string, string[i]);
        if (currentCount > count) {
            count = currentCount;
        }
    }
    return count;
}

// Bài 9a. Tìm dãy con tăng/giảm dài nhất
function longestIncreaseSubArray(array) {
    let result = [];
    let temp = [array[0]];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > array[i - 1]) {
            temp.push(array[i]);
        } else {
            if (temp.length > result.length) {
                result = temp;
            }
            temp = [array[i]];
        }
    }
    if (temp.length > result.length) {
        result = temp;
    }
    return result;
}

// Bài 9b. Sắp xếp ký tự theo thứ tự tăng/giảm và in ra.
function sortString(string, isIncrease) {
    for (let i = 0; i < string.length - 1; i++) {
        for (let j = i + 1; j < string.length; j++) {
            if (isIncrease && string[i] > string[j] || !isIncrease && string[i] < string[j]) {
                let temp = string[i];
                string[i] = string[j];
                string[j] = temp;
            }
        }
    }
}

// Bài 10a. Tìm ước chung lớn nhất
function gcd(number1, number2) {
    while (number2 != 0) {
        let temp = number1 % number2;
        number1 = number2;
        number2 = temp;
    }
    return number1;
}

// Bài 10b. Tìm bội chung nhỏ nhất
function lcm(number1, number2) {
    return number1 * number2 / gcd(number1, number2);
}

// Bài 11a. Tìm vị trí số lớn nhất trong mảng
function findMaxIndex(array) {
    let max = array[0];
    let index = 0;
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
            index = i;
        }
    }
    return index;
}

// Bài 11b. Tìm vị trí số nhỏ nhất trong mảng
function findMinIndex(array) {
    let min = array[0];
    let index = 0;
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
            index = i;
        }
    }
    return index;
}

// Bài 11c. Tính tổng mảng
function sumOfArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

// Bài 12a. Tìm số lớn nhất trong mảng 2 chiều
function findMaxIn2DArray(array) {
    let max = array[0][0];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] > max) {
                max = array[i][j];
            }
        }
    }
    return max;
}

// Bài 12b. Tìm số nhỏ nhất trong mảng 2 chiều
function findMinIn2DArray(array) {
    let min = array[0][0];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] < min) {
                min = array[i][j];
            }
        }
    }
    return min;
}

// Bài 12c. Tính tổng mảng 2 chiều trên hàng hoặc cột k
function sumOfRow(array, k) {
    let sum = 0;
    for (let i = 0; i < array[k].length; i++) {
        sum += array[k][i];
    }
    return sum;
}

function sumOfColumn(array, k) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i][k];
    }
    return sum;
}

// Bài 12d. Tổng các số nguyên tố trong mảng 2 chiều
function sumOfPrimeIn2DArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (isPrime(array[i][j])) {
                sum += array[i][j];
            }
        }
    }
    return sum;
}
