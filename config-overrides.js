const {
    override,
    fixBabelImports,
    addWebpackAlias,addDecoratorsLegacy
} = require('customize-cra');
const path = require("path");

module.exports = override(
    //按需加载antd
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    }),
    //别名配置
    addWebpackAlias({
        "@": path.resolve(__dirname, "./src"),
        "@pages": path.resolve(__dirname, "./src/pages"),
        "@component": path.resolve(__dirname, "./src/component"),
        "@api": path.resolve(__dirname, "./src/api"),
        "@actions": path.resolve(__dirname, "./src/actions"),
        "@router": path.resolve(__dirname, "./src/router"),
        "@staic": path.resolve(__dirname, "./src/staic"),
        "@utils": path.resolve(__dirname, "./src/utils"),
        "@common": path.resolve(__dirname, "./src/common"),
    }),
    addDecoratorsLegacy()
);