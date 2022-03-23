const path = require("path");
const isProduction = process.env.NODE_ENV == "production";

const config = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "..", "public"),
        filename: "bundle.js",
	},
	devServer: {
		open: true,
		host: "localhost",
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/i,
				include: path.resolve(__dirname, "..", "src"),
				exclude: path.resolve(__dirname, "..", "node_modules"),
				loader: "babel-loader",				
			},
			{
				test: /\.s[ac]ss$/i,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
				type: "asset",
			},
			{
				test: /\.(json)$/i,
				type: "asset/resource",
				generator: {
					filename: "[name][ext]",
				},
			},
		],
	},
};

module.exports = () => {
	if (isProduction) {
		config.mode = "production";
	} else {
		config.mode = "development";
	}
	return config;
};
