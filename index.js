// Bài 1a
function sum1ToN(n) {
    if (n < 0 || n > 1000) {
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
function sumTheDivisorsOfn(n) {
    let sum = n;
    for (let i = 1; i <= n / 2; i++) {
        if (n % i == 0) {
            sum += i;
        }
    }
    return sum;
}
 
// console.log(sumTheDivisorsOfn(6))
console.log(sumTheDivisorsOfn(16))

// 16: 1, 2, 4, 8, 16


// Bài 1c
function sumTheDigitsOfn(n) {
    let sum = 0;
    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    console.log(sum);
}

sumTheDigitsOfn(123);
sumTheDigitsOfn(456);

// Bài 1d, 2a
function LargestDigitOfn(n) {
    let max = 0;
    while (n > 0) {
        let currentNumber = n % 10;
        if (currentNumber > max) {
            max = currentNumber;
        }
        n = Math.floor(n / 10);
    }
    console.log(max);
}
LargestDigitOfn(123123123);
LargestDigitOfn(4564564569);

// Bài 2b
function numToArray(n) {
    let arr = []
    while (n > 0) {
        arr.push(n % 10);
        n = Math.floor(n / 10);
    }
    return arr;
}

// Bài 5
function sortArray(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

function secondLargestDigitOfn(n) {
    let arr = numToArray(n);
    let sortedArr = sortArray(arr);
    return sortedArr[1];
}

// Bài 2c
function SmallestDigitOfn(n) {
    let arr = numToArray(n);
    let sortArray = sortArray(arr);
    return sortArray[sortArray.length - 1];
}

// Bài 3a
// function isPrime(n) {
//     if (n < 2) {
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i == 0) {
//             return false;
//         }
//     }
//     return true;
// }

function isPrime(n) {
    if (n < 2) {
        return false;
    }
    if (n === 2) {
        return true;
    }
    if (n % 2 === 0) {
        return false;
    }
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

// Bài 2d
function getAllPrimeDigitOfn(n) {
    let arr = numToArray(n);
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(getAllPrimeDigitOfn(123456789).join(''));

// Bài 3b
function isPerfectNumber(n) {
    return sumTheDivisorsOfn(n) == 2 * n;
}

// Bài 3c
// function isSquareNumber(n) {
//     if (n < 4) {
//         return true;
//     } else if (n === 4) {
//         return false;
//     }
//     for (let i = 3; i <= n / 2; i++) {
//         if (i * i == n) {
//             return true;
//         }
//     }
//     return false;
// }

function isSquareNumber(n) {
    return Math.sqrt(n) % 1 === 0;
}

// Bài 4a
function reverseString(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        result = str[i] + result;
    }
    return result;
}

// Bài 4b. delete all " " in string
function deleteSpace(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            result += str[i];
        }
    }
    return result;
}

//
function isEqualsString(str1, str2) {
    if (str1.length !== str2.length) {
        return false
    }
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            return false;
        }
    }
    return true;
}

// Bài 4c.
function isPalindrome(str) {
    return isEqualsString(str, reverseString(str));
}

function getSubString(str, start, end) {
    let result = '';
    for (let i = start; i < end; i++) {
        result += str[i];
    }
    return result;
}

// Bài 4d. Find the longest palindrome in a string
function longestPalindrome(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            let subStr = getSubString(str, i, j + 1);
            if (isPalindrome(subStr) && subStr.length > result.length) {
                result = subStr;
            }
        }
    }
    return result;
}

// Bài 5. dòng 74

// Bài 6a.
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Bài 6b. Giống bài 1c

// Bài 7. input n, output fibonacci(n)
function fibonacci(n) {
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }
    let a = 0;
    let b = 1;
    let c;
    for (let i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return c;
}

function fibonacciArray(n) {
    let arr = [];
    for (let i = 0; i <= n; i++) {
        arr.push(fibonacci(i));
    }
    return arr;
}

console.log("Fibonacci: ");
console.log(fibonacciArray(10));

// Bài 8a. "ueoai"
function isVowel(c) {
    switch (c) {
        case 'u':
        case 'e':
        case 'o':
        case 'a':
        case 'i':
            return true;
    }
    return false;
}

function countVowel(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (isVowel(str[i])) {
            count++;
        }
    }
    return count;
}

// Bài 8b. count exist
function countExist(str, c) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === c) {
            count++;
        }
    }
    return count;
}

// Bài 8c. Đếm số ký tự xuất hiện nhiều nhất
function countMostExist(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        let currentCount = countExist(str, str[i]);
        if (currentCount > count) {
            count = currentCount;
        }
    }
    return count;
}

// Bài 9a. Tìm dãy con tăng/giảm dài nhất
function longestIncreaseSubArray(arr) {
    let result = [];
    let temp = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            temp.push(arr[i]);
        } else {
            if (temp.length > result.length) {
                result = temp;
            }
            temp = [arr[i]];
        }
    }
    if (temp.length > result.length) {
        result = temp;
    }
    return result;
}

// Bài 9b. Sắp xếp ký tự theo thứ tự tăng/giảm và in ra.
function sortString(str, isIncrease) {
    for (let i = 0; i < str.length - 1; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (isIncrease && str[i] > str[j] || !isIncrease && str[i] < str[j]) {
                let temp = str[i];
                str[i] = str[j];
                str[j] = temp;
            }
        }
    }
}

// Bài 10a. Tìm ước chung lớn nhất
function gcd(a, b) {
    while (b != 0) {
        let temp = a % b;
        a = b;
        b = temp;
    }
    return a;
}

// Bài 10b. Tìm bội chung nhỏ nhất
function lcm(a, b) {
    return a * b / gcd(a, b);
}

// Bài 11a. Tìm vị trí số lớn nhất trong mảng
function findMaxIndex(arr) {
    let max = arr[0];
    let index = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            index = i;
        }
    }
    return index;
}

// Bài 11b. Tìm vị trí số nhỏ nhất trong mảng
function findMinIndex(arr) {
    let min = arr[0];
    let index = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
            index = i;
        }
    }
    return index;
}

// Bài 11c. Tính tổng mảng
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Bài 12a. Tìm số lớn nhất trong mảng 2 chiều
function findMaxIn2DArray(arr) {
    let max = arr[0][0];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > max) {
                max = arr[i][j];
            }
        }
    }
    return max;
}

// Bài 12b. Tìm số nhỏ nhất trong mảng 2 chiều
function findMinIn2DArray(arr) {
    let min = arr[0][0];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] < min) {
                min = arr[i][j];
            }
        }
    }
    return min;
}

// Bài 12c. Tính tổng mảng 2 chiều trên hàng hoặc cột k
function sumRow(arr, k) {
    let sum = 0;
    for (let i = 0; i < arr[k].length; i++) {
        sum += arr[k][i];
    }
    return sum;
}

function sumColumn(arr, k) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i][k];
    }
    return sum;
}

// Bài 12d. Tổng các số nguyên tố trong mảng 2 chiều
function sumPrimeIn2DArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (isPrime(arr[i][j])) {
                sum += arr[i][j];
            }
        }
    }
    return sum;
}
