module.exports = (config, context) => {
  return {
    ...config,
    entry: {
      ...config.entry,
      config: "./apps/payload/src/payload.config.ts",
    },
    output: {
      ...config.output,
      filename: "[name].js",
    },
  };
};
