/*
    solution #1

    Highmaru, Inc. David, Shin
*/

function printbin(num,n) {
    let a="";

    while (n-->0) {
        a += (num&1)?"#":" "
        num >>=1;
    }
    let ret = a.split("").reverse().join("")
    // console.log( ret )
    return ret
}

function compute(arr1,arr2,n) {
    let ret = [];
    for (var i=0;i<n;i++) {
        ret.push(printbin(arr1[i]|arr2[i],n))
    }
    return ret;
}

var ar1 = [9, 20, 28, 18, 11]
var ar2 = [30, 1, 21, 17, 28]

var result = compute(ar1,ar2,5)

console.log(result)

ar1 = [46, 33, 33 ,22, 31, 50];
ar2 = [27 ,56, 19, 14, 14, 10];

result = compute(ar1,ar2,6)

console.log(result)
