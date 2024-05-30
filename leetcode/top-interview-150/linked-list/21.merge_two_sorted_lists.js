var mergeTwoLists = function (list1, list2) {
	const arr = [];
	while (list1 != null) {
		arr.push(list1.val);
		list1 = list1.next;
	}
	while (list2 != null) {
		arr.push(list2.val);
		list2 = list2.next;
	}
	const sorted_arr = arr.sort((a, b) => a - b);
	return sorted_arr.reduceRight((next, val) => ({ val, next }), null);
};

var mergeTwoLists = function (list1, list2) {
	if (!list1) return list2;
	else if (!list2) return list1;
	else if (list1.val <= list2.val) {
		list1.next = mergeTwoLists(list1.next, list2);
		return list1;
	} else {
		list2.next = mergeTwoLists(list1, list2.next);
		return list2;
	}
};

var mergeTwoLists = function (l1, l2) {
	let tempNode = new ListNode(0, null);
	let currentNode = tempNode;

	while (l1 && l2) {
		if (l1.val < l2.val) {
			currentNode.next = l1;
			l1 = l1.next;
		} else {
			currentNode.next = l2;
			l2 = l2.next;
		}
		currentNode = currentNode.next;
	}
	currentNode.next = l1 || l2;

	return tempNode.next;
};
