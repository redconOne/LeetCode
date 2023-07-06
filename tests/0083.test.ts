import deleteDuplicates from '../tsSolutions/0083-Remove-Duplicates-from-Sorted-List';
import { ListNode } from '../tsSolutions/0083-Remove-Duplicates-from-Sorted-List';

test('Testing deleteDuplicates', () => {
  let head = new ListNode(1, new ListNode(1, new ListNode(2)));
  let solution = new ListNode(1, new ListNode(2));
  expect(deleteDuplicates(head)).toStrictEqual(solution);

  head = new ListNode(
    1,
    new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3))))
  );
  solution = new ListNode(1, new ListNode(2, new ListNode(3)));
  expect(deleteDuplicates(head)).toStrictEqual(solution);
});
