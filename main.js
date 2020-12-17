// 个人题解
function ListNode(x){
    this.val = x;
    this.next = null;
}
function printListFromTailToHead(head)
{
  // write code here
  let arr=[];
  let node=head;
  while(node){
    arr.unshift(node.val);
    node=node.next;
  }
  return arr;
}


// 官方题解
/*
vector<int> printListFromTailToHead(ListNode* head) {
  vector<int> ret;
  if (!head)
    return ret;
  ret = printListFromTailToHead(head->next);
  ret.push_back(head->val);
  return ret;
}*/
