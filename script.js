/*
console.log("************************* FIZZ-BUZZ *******************************");


function fizzBuzz(num){
    for(var i = 0; i < num; i++){
        if(i%15 == 0){
            console.log("FizzBuzz");
        } else if (i % 5 == 0) {
            console.log("Buzz");
        } else if (i % 3 == 0) {
            console.log("Fizz");
        } else {
            console.log(i);
        }
    }
}

fizzBuzz(50);

*/


/*
console.log("************************* HARMLESS RANSOM NOTE *******************************");
function harmlessRansomNote(noteText,magazineText){
    var noteArr = noteText.split(' ');
    var magazineArr = magazineText.split(' ');
    var magazineObj = {};
    magazineArr.forEach(word => {
        if(!magazineObj[word]){
            magazineObj[word]=0;
        }
        magazineObj[word]++;
    });
    var noteIsPossible = true;
    noteArr.forEach(word =>{
        if(magazineObj[word]){
            magazineObj[word]--;
            if(magazineObj[word] < 0){
                noteIsPossible = false;
            }
        } else {
            noteIsPossible = false;
        }
    });
    console.log(noteIsPossible);
    return noteIsPossible;
}

harmlessRansomNote("hello there there","there peter popper said hello to a dog standing there");
*/

/*
console.log("************************* PALINDROME *******************************");

function palindrome(string){
    string = string.toLowerCase();
    var charArr = string.split('');
    var allAllowedCharactersArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var strToBeComparedArr = [];
    charArr.forEach(letter => {
        if (allAllowedCharactersArr.indexOf(letter) > -1) {
            strToBeComparedArr.push(letter);
        }
    });
    if(strToBeComparedArr.join('') == strToBeComparedArr.reverse().join('')){
        return true;
    }
    return false;

}
console.log(palindrome("madam, I'm Adam"));
*/

/*
console.log("************************* CAESAR CIPHER *******************************");

function caesarCipher(str, num){
    num = num % 26;
    var newStr = '';
    var lowerCaseStr = str.toLowerCase();
    var alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');
    for(var i = 0 ; i < lowerCaseStr.length; i++){
        var currLetter = lowerCaseStr[i];
        if(currLetter === ' '){
            newStr+= ' ';
            continue;
        }
        var currIndex = alphabets.indexOf(currLetter);
        var newIndex = currIndex + num;
        if(currIndex == -1){
            newStr += str[i];
            continue;
        }
        if(newIndex < 0){
            newIndex += 26;
        }
        if(newIndex > 25){
            newIndex -= 26;
        }
        if(str[i] === str[i].toUpperCase()){
            newStr += alphabets[newIndex].toUpperCase();
        } else {
            newStr += alphabets[newIndex];
        }
    }
    return newStr;
}

console.log(caesarCipher('hello there howdy! I\'m 5',-7));
console.log(caesarCipher('hello there howdy!,20',20));

*/

/*
console.log("************************* REVERSE WORDS *******************************");
function reverseWords(str){
    var wordArr = str.split(' ');
    var reverseWordArr = [];
    wordArr.forEach(word => {
        var revWord = '';
        for (var i = word.length-1; i >= 0 ; i--) {
            revWord += word[i];
        }
        reverseWordArr.push(revWord);
    });
    return reverseWordArr.join(' ');
}

console.log(reverseWords('Hi there howdy!'));

*/

/*
console.log("************************* REVERSE ARRAY IN PLACE *******************************");

function reverseArrayInPlace(arr){
    for(var i = 0 ; i <= arr.length/2; i++){
        var temp = arr[i];
        arr[i] = arr[arr.length-1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}

console.log(reverseArrayInPlace([1,3,2,5,7,9,0]));

*/

/*
console.log("************************* MEAN MEDIAN MODE *******************************");
function meanMedianMode(arr){
    return {
        mean:   getMean(arr),
        median: getMedian(arr),
        mode:   getMode(arr)
    };
}

function getMean(arr){
    var sum = 0;
    arr.forEach(item => {
        sum += item;
    });
    var mean = sum / arr.length;
    return mean;
}
function getMedian(arr){
    arr.sort(function (a, b) { return a - b})
    var median;
    if(arr.length%2 !== 0){
        median = arr[Math.floor(arr.length/2)];
    } else {
        var mid1 = arr[Math.floor(arr.length / 2) - 1];
        var mid2 = arr[Math.floor(arr.length / 2)];
        median = (mid1+mid2)/2; 
    }
    return median;
}
function getMode(arr){
    var modeObj = [];
    arr.forEach(num => {
        if(!modeObj[num]){
            modeObj[num] = 0;
        }
        modeObj[num]++;
    });
    var maxFrequency = 0;
    var modes = [];
    for(var num in modeObj){
        if(modeObj[num] > maxFrequency){
            modes = [num];
            maxFrequency = modeObj[num];
        } else if(modeObj[num] === maxFrequency){
            modes.push(num);
        }
    }
    if(modes.length === Object.keys(modeObj).length){
        modes = [];
    }
    return modes;
}

console.log(meanMedianMode([1, 1, 9, 5, 3, 4]));

*/

/*
console.log("************************* TWO SUM *******************************");

function twoSum(numArr, sum){
    var pairs = [];
    var hashTable = [];
    for(var i = 0; i < numArr.length; i++){
        var currNum = numArr[i];
        var counterpart = sum - currNum;
        if(hashTable.indexOf(counterpart) != -1){
            pairs.push([currNum,counterpart]);
        }
        hashTable.push(currNum);
    }
    return pairs;
}

console.log(twoSum([1,4,5,7,2,3,6,0],10));
*/

/*
console.log("************************* BINARY SEARCH *******************************");

function binarySearch(arr,key){
    var midIndex = Math.floor(arr.length/2);
    var midElem = arr[midIndex];
    if(midElem == key){
        return true
    } else if(midElem < key && arr.length > 1){
        return binarySearch(arr.splice(midIndex,arr.length),key);
    } else if (midElem > key && arr.length > 1) {
        return binarySearch(arr.splice(0,midIndex), key);
    } else {
        return false;
    }
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6));
*/

/*
console.log("************************* FIBONACCI *******************************");
function fibonacci(pos){
    if(pos < 3){
        return 1;
    } else {
        return (fibonacci(pos-1) + fibonacci(pos-2));
    }
}

console.log(fibonacci(40));
*/

/*
console.log("************************* MEMOISED FIBONACCI *******************************");
function fibMemo(index,cache){
    cache = cache || [];
    if(cache[index]){
        return cache[index];
    } else {
        if(index < 3){
            return 1;
        } else {
            cache[index] = (fibMemo(index - 1,cache) + fibMemo(index - 2, cache)); 
        }
    }
    return cache[index]
}
console.log(fibMemo(100));

*/

/*
console.log("************************* SIEVE OF ERATOSTHENESE *******************************");
function sieveOfEratosthenes(n){
    var primes = [];
    for(var i = 0; i <= n;i++ ){
        primes[i] = true;
    }
    primes[0] = false;
    primes[1] = false;
    for(var i = 2 ; i < Math.sqrt(n); i++){
        for(var j = 2 ; j*i <= n ; j++){
            primes[j*i] = false;
        }
    }
    var result = [];
    for(var i=0; i<primes.length;i++){
        if(primes[i]){
            result.push(i);
        }
    }
    return result;
}

console.log(sieveOfEratosthenes(100));
*/

/*
console.log("************************* BUBBLE SORT *******************************");

function bubbleSort(arr){
    for(var i = arr.length;i > 0 ; i--){
        for(var j = 0; j< i ; j++){
            if(arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([1, 5,7,2,6,2,3,9,0,-5]));

*/

/*
console.log("************************* MERGE SORT *******************************");
function mergeSort(arr){
    if(arr.length < 2) return arr;
    var midIndex = Math.floor(arr.length/2);
    var firstHalf = arr.slice(0,midIndex);
    var secondHalf = arr.slice(midIndex);
    return merge(mergeSort(firstHalf),mergeSort(secondHalf));
}

function merge(arr1,arr2){
    var result = [];
    while(arr1.length && arr2.length){
        var minElem;
        if(arr1[0]<arr2[0]){
            minElem = arr1.shift();
        } else {
            minElem = arr2.shift();
        }
        result.push(minElem);
    }
    if(arr1.length){
        result = result.concat(arr1);
    } else {
        result = result.concat(arr2);
    }

    return result;
}

console.log(mergeSort([2,-1,4,90,4,27,48,56,10,-50]));

*/

console.log("************************* MAX STOCKPROFIT *******************************");
function maxStockProfit(priceArr){
    var maxProfit = -1;
    var buyPrice = 0;
    var sellPrice = 0;
    var changeBuyPrice = true;

    for(var i = 0; i < priceArr.length ; i++){
        if(changeBuyPrice){
            buyPrice = priceArr[i];
        }
        sellPrice = priceArr[i+1];
        if(sellPrice < buyPrice){
            changeBuyPrice = true;
        } else {
            var tempProfit = sellPrice - buyPrice;
            if(tempProfit > maxProfit){
                maxProfit = tempProfit;
                changeBuyPrice = false;
            }
        }
    }
    return maxProfit;
}

console.log(maxStockProfit([2, -1, 4, 90, 4, 27, 48, 56, 10, -50]));