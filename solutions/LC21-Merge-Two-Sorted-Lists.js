const mergeTwoLists = (list1, list2) => {
  let tempNode = new ListNode(),
    currentNode = tempNode;
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      currentNode.next = list1;
      list1 = list1.next;
    } else {
      currentNode.next = list2;
      list2 = list2.next;
    }
    currentNode = currentNode.next;
  }
  if (list1) currentNode.next = list1;
  if (list2) currentNode.next = list2;
  return tempNode.next;
};

// First declare a new tempNode to hold the value we need to return
// use currentNode to navigate the two lists
// while list1 and list2 are not null iterate
// for whichever list has the lowest value set currentNode.next to the proper node
// iterate that list to the next node
// before moving into next iteration advance currentNode
// set currentNode.next to whichever list1 remains after the while
// return the currentNode chain by returning tempNode.next;
