export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const deleteDuplicates = (head: ListNode | null): ListNode | null => {
  if (!head) return head;

  let current: ListNode = head;
  while (current.next)
    if (current.val === current.next.val) current.next = current.next.next;
    else current = current.next;
  return head;
};

export default deleteDuplicates;
