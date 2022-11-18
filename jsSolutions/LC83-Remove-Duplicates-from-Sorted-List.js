const deleteDuplicates = (head) => {
  if (!head) return head;
  let tempNode = head;
  while (head.next)
    if (head.val === head.next.val) head.next = head.next.next;
    else head = head.next;
  return tempNode;
};

// if head is empty return
// otherwise, while head.next, if head.val === head.next.val set head.next to head.next.next
