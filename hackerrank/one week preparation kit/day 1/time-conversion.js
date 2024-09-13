function timeConversion(s) {
	const am_pm = s.slice(-2).toLowerCase();
	const time_only = s.slice(0, -2);
	const times = time_only.split(':');
	const hour = Number(times[0]);
	if (am_pm === 'pm') {
		times[0] = hour + (hour === 12 ? 0 : 12);
		return times.join(':');
	} else {
		times[0] = String(hour === 12 ? 0 : hour).padStart(2, 0);
		return times.join(':');
	}
}

console.log(timeConversion('12:01:00PM'));
console.log(timeConversion('12:01:00AM'));
console.log(timeConversion('07:05:45PM'));
console.log(timeConversion('04:59:59AM'));
