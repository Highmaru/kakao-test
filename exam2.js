/*
    solution #1

    Highmaru, Inc. David, Shin
*/
const ref = ["1S2D*3T","1D2S#10S","1D2S0T","1S*2T*3S","1D#2S*3S","1T2D3D#","1D2S3T*"];

function parse(str) {
    const rex = /([0-9]+[S,D,T][*#]?)/g;
    return str.match(rex)
}

function parse2(str) {
    const rex = /([0-9]+)([S,D,T])([*#]?)/
    return str.match(rex)
}

function compute(str) {
    let ret=[]
    let arr = parse(str)
    for (var i=0;i<arr.length;i++) {
        let items = parse2(arr[i]);
        // console.log(items)
        var num = parseInt(items[1]);
        switch(items[2]) {
            case 'D': num = num*num; break;
            case 'T': num = num*num*num; break;
        }
        switch(items[3]) {
            case '*': num*=2; if (ret.length>0) ret[ret.length-1] *=2; break;
            case '#': num *= -1; break; 
        }
        ret.push(num)
    }
    return ret;
}

function result(arr) {
    var ret=0;
    for (var i=0;i<arr.length;i++)
        ret += arr[i];
    console.log(arr.join(',')+' = '+ret)
}

for (var i=0;i<ref.length;i++)
    result(compute(ref[i]))
