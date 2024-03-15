async function sleep(millis) {
	return new Promise((resolve) => setTimeout(() => resolve(millis), millis));
}

async function sleep(millis) {
	return new Promise(function (resolve) {
		setTimeout(function () {
			resolve(millis);
		}, millis);
	});
}
