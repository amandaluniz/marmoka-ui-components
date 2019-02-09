const path = require("path");

module.exports = (baseConfig, env, defaultConfig) => {
	// Extend defaultConfig as you need.

	// For example, add typescript loader:
	defaultConfig.module.rules.push({
		test: /\.(ts|tsx)$/,
		loader: require.resolve("babel-loader"),
		options: {
			presets: [["react-app", { flow: false, typescript: true }]]
		}
	});
	defaultConfig.resolve.extensions.push(".ts", ".tsx");
	return defaultConfig;
};
