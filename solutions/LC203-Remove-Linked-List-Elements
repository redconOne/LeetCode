const removeElements = (head, val) => {
  let current = head;

  while (current && current.next)
    current.next.val === val
      ? (current.next = current.next.next)
      : (current = current.next);

  return !head ? head : head.val === val ? head.next : head;
};

// create a current node to iterate, leaving head node as a returnable element
// while current is not null AND current.next is not null do things
// if current.next contains val skip it
// else set current to current.next to continue down the linked list
// if head is null return head
// if head contains val return head.next, else return head;
