module.exports = {
	entry: "./src/index.ts",
	output: {
		path: __dirname + "/dist",
		filename: "bundle.js"
	},

	// Enable sourcemaps for debugging webpack"s output.
	devtool: "source-map",

	plugins: [
	],
	resolve: {
		 extensions: [".ts", ".js"]
	},

	module: {
		loaders: [
			// All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
			{ test: /\.ts$/, loader: "ts-loader" }
		],
	}
};
