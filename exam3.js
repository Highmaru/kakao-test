/*
    solution #3

    Highmaru, Inc. David, Shin
*/

var ref = [
  {   
      num: 3,
      val: ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]
  },
  {   
      num: 3,
      val: ["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"],
  },
  {   
      num: 2,
      val:["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"],
     },
  {   
      num: 5,
      val: ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"],
  },
  {   
      num: 2,
      val:["Jeju", "Pangyo", "NewYork", "newyork"],
  },
  {   
      num: 0,
      val:["Jeju", "Pangyo", "Seoul", "NewYork", "LA"]
  }
]    

var cache = [];
var MAXCACHE = 3;

function add(str) {
  str = str.toUpperCase();
  var idx = cache.indexOf(str)
  var t = 5
  if (idx<0) {
      // cache miss
      cache.push(str);
      if (cache.length>MAXCACHE)
          cache.shift();
  } else {
      // cache hit
      t = 1;
      cache.push(cache.shift())
  }
  return t
}

for (var j=0;j<ref.length;j++) {
  var tot=0;
  MAXCACHE = ref[j].num;
  item = ref[j].val
  for (var i=0;i<item.length;i++) {
      tot+=add(item[i])
  }
  console.log('total='+tot)
  cache=[]
}
