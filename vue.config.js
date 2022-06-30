const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    publicPath: "./",
    outputDir: process.env.outputDir,
    transpileDependencies: true,
    lintOnSave: true,
    chainWebpack: (config) => {
        config.plugin("html").tap((args) => {
            args[0].title = "风见のBLOG";
            return args;
        });
    },
});
