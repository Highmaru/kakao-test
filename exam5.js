/*
    solution #5

    Highmaru, Inc. David, Shin
*/
const ref=[
  ["FRANCE","french"],
  ["handshake","shake hands"],
  ["aa1+aa2","AAAA12"],
  ["E=M*C^2","e=m*c^2"]
]

function getArray(str) {
  let ret=[];
  for (var i=0;i<str.length-1;i++) {
      let tmp = str.substr(i,2);
       if (tmp.search(/[^A-Za-z]/) == -1)
          ret.push(tmp.toUpperCase())
  }
  return ret;
}

function union(a, b) {
  var tmp={}, res=[];
  for(var i=0;i<a.length;i++) if (tmp[a[i]]) tmp[a[i]].a++; else tmp[a[i]] = { a:1,b:0 }
  for(var i=0;i<b.length;i++) if (tmp[b[i]]) tmp[b[i]].b++; else tmp[b[i]] = { a:0,b:1 };
  for(var k in tmp) {
      const v = tmp[k]
      let count=(v.a>v.b)?v.a:v.b;
      for (t=0;t<count;t++)
          res.push(k);
  }
  return res;
}

function intersect(a, b) {
  var tmp={}, res=[];
  for(var i=0;i<a.length;i++) if (tmp[a[i]]) tmp[a[i]].a++; else tmp[a[i]] = { a:1,b:0 }
  for(var i=0;i<b.length;i++) if (tmp[b[i]]) tmp[b[i]].b++; else tmp[b[i]] = { a:0,b:1 };
  for(var k in tmp) {
      const v = tmp[k];
      let count=(v.a>v.b)?v.b:v.a;
      if (v.a>0 && v.b>0) {
          for (t=0;t<count;t++)
              res.push(k);
      }
  }
  return res;
}

function getCount(str1,str2) {
  var u = union(getArray(str1),getArray(str2));
  var i = intersect(getArray(str1),getArray(str2));
  // console.log(u)
  // console.log(i)
  return {
      u: u.length,
      i: i.length
  }
}

function compute(v) {
  var ret=0;
  if (v.u==0) ret=1;
  else
    ret = v.i/v.u;
  return parseInt(ret*65536)
}

for (var i=0;i<ref.length;i++) {
  let val = getCount(ref[i][0],ref[i][1])
  console.log('"'+ref[i][0]+'","'+ref[i][1]+'" : '+compute(val))
}
// console.log(intersect(getArray("FRANCE"),getArray("french")))
