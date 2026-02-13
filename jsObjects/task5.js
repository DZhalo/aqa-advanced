const users = [
	{
		username: 'Developer',
		mood: 'sleepy',
		energyLevel: 2,
		isOnline: true,
	},
	{
		username: 'QA',
		mood: 'frustrated',
		energyLevel: 4,
		isOnline: false,
	},
	{
		username: 'Engineering Manager',
		mood: 'furious',
		energyLevel: 9,
		isOnline: true,
	},
];

for (const { username, mood, energyLevel, isOnline } of users) {
	console.log(`User: ${username} | Mood: ${mood} | Energy: ${energyLevel} | Online: ${isOnline}`);
}
