interface UpdateLog {
	version: string;
	date: string;
	changes: string;
}

const updateLogs: UpdateLog[] = [
	{
		version: "1.0.0",
		date: "01-02-2024",
		changes: `Test Update Log
- Test
- Test
- Test

        `,
	},
	{
		version: "1.0.0",
		date: "01-02-2024",
		changes: `Test Update Log
- Test
- Test
- Test

        `,
	},
];

const gamepasses: number[] = [
	18278551, 18283398, 18283421, 18306546, 18342315, 18342394, 18503103, 18802466, 19734286, 19734364, 19734367,
	19734376, 19734382, 19734391, 19795713, 50202573, 106905099,
];

const data = {
	updateLogs,
	gamepasses,
};

export default data;
