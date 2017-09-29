/*
    solution #4

    Highmaru, Inc. David, Shin
*/
var ref =[
  {
      n:1,	t:1,	m:5,	
      val:["08:00", "08:01", "08:02", "08:03"]
  },
  {
      n:2,	t:10,	m:2,	
      val:["09:10", "09:09", "08:00"]
  },
  {
      n:2,	t:1,	m:2,
      val:["09:00", "09:00", "09:00", "09:00"]
  },
  {
      n:1,	t:1,	m:5,
      val:["00:01", "00:01", "00:01", "00:01", "00:01"]
  },
  {
      n:1,	t:1,	m:1,	
      val:["23:59"]
  },
  {
      n:10,	t:60,	m:45,
      val:["23:59","23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59"]
  }
]

const TIMEMIN = { h:9, m:0 }
const TIMEMAX = { h:18, m:0 }

function str2t(str) {
  const rex = /([0-9]+):([0-9]+)/
  let arr = str.match(rex)   
  return { h: parseInt(arr[1]), m: parseInt(arr[2]) }; 
}

function t2str(t) {
  return ("00"+t.h.toString()).slice(-2)+':'+("00"+t.m.toString()).slice(-2)
}

function tshift(t,min) {
  t.m += min;
  if (t.m>59) { t.h++; t.m-=60 }
  if (t.m<0) { t.h--; t.m+=60 }
  if (t.h>23) { t.h-=24 }
  if (t.h<0) { t.h+=24 }
  return t;
}

function tcomp(t1,t2) {
  if (t1.h>t2.h) return 1;
  else if (t1.h==t2.h) {
      if (t1.m>t2.m) return 1;
      else if (t1.m==t2.m) return 0;
      else return -1;
  } else return -1;
}

function getBus(item) {
    
}
function getDuration(arr) {
  var min={h:0,m:0}
  var max={h:0,m:0}
  
  for (var i=0;i<arr.length;i++) {
      var t = str2t(arr[i])
      if (tcomp(t,min)<0) min = t
      if (tcomp(t,max)>0) max = t
  }
  if (tcomp(min,TIMEMIN)<0) min = TIMEMIN
  if (tcomp(max,TIMEMAX)>0) max = TIMEMAX
  return { min:min, max:max }
}

for (var i=0;i<ref.length;i++) {
  console.log(getDuration(ref[i].val))
}
// console.log(t2str(tshift(str2t("23:59"),5)))
