// 个人题解
function Find(target, array)
{
  // write code here
  for(let i=0;i<array.length;i++){
    for(let j=0;j<array.length;j++){
      if(target===array[i][j]){
        return true;
      }
    }
  }
  return false;
}

// 官方题解 -- 使用二分法
function Find_std(target, array) {
  // 判断数组是否为空
  let m = array.length;
  if (m === 0) return false;
  let n = array[0].length;
  if (n === 0) return false;
  let r = 0, c = n-1; // 右上角元素
  while (r<m && c>=0) {
    if (target === array[r][c]) {
      return true;
    }
    else if (target > array[r][c]) {
      ++r;
    }
    else {
      --c;
    }
  }
  return false;
}