var hasCycle = function (head) {
	if (!head || !head.next) {
		return false;
	}
	let slow = head;
	let fast = head;
	while (fast && fast.next) {
		slow = slow.next;
		fast = fast.next.next;
		if (slow === fast) {
			return true;
		}
	}
	return false;
};

var hasCycle = function (head) {
	if (!head || !head.next) {
		return false;
	}
	const cache = new Map();
	let current = head;
	while (current) {
		if (cache.get(current.next)) {
			return true;
		} else {
			cache.set(current.next, true);
		}
		current = current.next;
	}
	return false;
};
