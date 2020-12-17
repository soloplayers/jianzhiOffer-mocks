// 个人题解
/* 正则表达式 */
function replaceSpace1(str)
{
  // write code here
  return str.replace(/ /g,"%20");
}
/* 另外解 */
function replaceSpace2(str) {
  let s='';
  for(let i=0;i<str.length;i++){
    if(str[i]!==' '){
      s+=str[i];
    }
    else {
      s+="%20";
    }
  }
  return s;
}

// 官方题解
/*
void replaceSpace(char *str,int length) {
  if (str == nullptr || length <= 0) return; // 养成良好习惯，判空操作
  int cnt = 0;  // 空格的个数
  for (int i=0; i != length; ++i) {
    if (str[i] == ' ') ++cnt;
  }
  if (!cnt) return; // 没有空格，直接返回
  int new_length = length+cnt*2;
  for (int i=length; i >= 0; --i) {
    if (str[i] == ' ') {
      str[new_length--] = '0';
      str[new_length--] = '2';
      str[new_length--] = '%';
    }
    else {
      str[new_length--] = str[i];
    }
  }
}*/
