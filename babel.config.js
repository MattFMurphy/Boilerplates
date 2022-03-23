module.exports = api => {
	const isProduction = api.env("production");
	const isDev = api.env("development");
	const isTest = api.env("test");

	return {
		presets: [
			[
				"@babel/preset-env",
				{
					targets: {
						chrome: "62",
						safari: "11",
						edge: "40",
						firefox: "57",
						ie: "11",
					},
				},
			],
			"@babel/preset-react",
		],
		plugins: ["@babel/plugin-transform-runtime"],
	};
};
