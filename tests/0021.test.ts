import mergeTwoLists from '../tsSolutions/0021-Merge-Two-Sorted-Lists';

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

test('Testing mergeTwoLists', () => {
  let l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
  let l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
  let sol = new ListNode(
    1,
    new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4))))
    )
  );
  expect(mergeTwoLists(l1, l2)).toStrictEqual(sol);

  l1 = new ListNode();
  l2 = new ListNode();
  sol = new ListNode(0, new ListNode());
  expect(mergeTwoLists(l1, l2)).toStrictEqual(sol);

  l1 = new ListNode();
  l2 = new ListNode(0);
  sol = new ListNode(0, new ListNode());
  expect(mergeTwoLists(l1, l2)).toStrictEqual(sol);
});
