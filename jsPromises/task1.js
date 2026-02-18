function logAfterDelay(text, ms) {
	setTimeout(() => {
		console.log(text);
	}, ms);
}

logAfterDelay('Why did it take so long?', 1500);
