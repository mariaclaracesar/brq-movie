module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
          alias: {
            "@components": "./src/components",
            "@screens": "./src/screens",
            "@styles": "./src/styles",
            "@assets": "./src/assets",
            "@routes": "./src/routes",
            "@services": "./src/services",
            "@utils": "./src/utils",
            "@dtos": "./src/dtos",
            "@contexts": "./src/contexts",
            "@hooks": "./src/hooks",
          },
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
