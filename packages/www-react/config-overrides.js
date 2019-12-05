const { override, fixBabelImports, addBundleVisualizer, addLessLoader, disableEsLint } = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        //    modifyVars: { '@primary-color': '#1DA57A' },
        localIdentName: "editor-[local]-[hash:base64:5]"
    }),
    // --analyze
    addBundleVisualizer({
        "analyzerMode": "static",
        "reportFilename": "report.html"
    }, true),
    disableEsLint()
);