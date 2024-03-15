class EventEmitter {
	constructor() {
		this.events = new Map();
	}
	subscribe(eventName, callback) {
		if (!this.events.has(eventName)) {
			this.events.set(eventName, []);
		}
		const event = this.events.get(eventName);
		event.push(callback);
		return {
			unsubscribe: () => {
				const index = event.indexOf(callback);
				if (index !== -1) {
					event.splice(index, 1);
				}
			},
		};
	}

	emit(eventName, args = []) {
		if (!this.events.has(eventName)) {
			return [];
		}
		const events = this.events.get(eventName);
		const results = [];
		for (const event of events) {
			results.push(event(...args));
		}
		return results;
	}
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
