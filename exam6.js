/*
    solution #6

    Highmaru, Inc. David, Shin
*/
var ref = [
  {
      m:4, n:5, val:['CCBDE','AAADE','AAABF','CCBBF']
  },
  {
      m:6, n:6, val:['TTTANT','RRFACC','RRRFCC','TRRRAA','TTMMMF','TMMTTJ']
  }
]

function checkpos(x,y,board,target) {
  if (board[y][x]===board[y][x+1]
      && board[y][x+1]===board[y+1][x]
      && board[y+1][x]===board[y+1][x+1] && board[y][x]!=='0') {
      target[y][x]='#';
      target[y+1][x]='#';
      target[y+1][x+1]='#';
      target[y][x+1]='#';
  } else {
      if (target[y][x]!='#')
          target[y][x]=board[y][x];
      if (target[y+1][x]!='#')
          target[y+1][x]=board[y+1][x];
      if (target[y+1][x+1]!='#')
          target[y+1][x+1]=board[y+1][x+1];
      if (target[y][x+1]!='#')
          target[y][x+1]=board[y][x+1];
  }
}

function deleteitem(org) {
  let m = org.length;
  let n = org[0].length;
  let tot=0;
  let cc=0;

  for (let i=0;i<n;i++) {
      for (let j=m-1;j>=0;j--) {
          if (org[j][i]=='#') { cc++;org[j][i]='0'}
          else {
              if (cc>0) {
                  org[j+cc][i]=org[j][i]
                  org[j][i]='0'
              }
          }
      }
      tot+=cc;
      cc=0;
  }
  return { count:tot, val:org };
}

function examin_board(org) {
  let target = [];
  let total=0;
  let m = org.length;
  let n = org[0].length;

  for (let i=0;i<m;i++) {
      target.push([])
  }

  for (let i=0;i<m-1;i++) {
      for (let j=0;j<n-1;j++) {
          checkpos(j,i,org,target)
      }
  }
  let res = deleteitem(target);
  if (res.count>0) {
      total+=res.count;
      target = res.val;
      console.log(target);
      console.log('------------');
      total+=examin_board(target)
      return total;
  }
  else {
      return total;
  }
}
function checkboard(item) {
  let { m,n,val} = item;
  let board = [];
  for (let i=0;i<m;i++) {
      board.push(val[i].split(""))
  }

  return examin_board(board)
}

for (var i=0;i<ref.length;i++)
  console.log('==> delete '+checkboard(ref[i])+'lines');