/* -––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * Configure Require.js
 * http://requirejs.org/
 * -––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
var srcApp          = wp.js_url,
    srcLib          = '../lib/',
    srcNodeModules  = '../../node_modules/';

// 👁👁 Configure Require.js
require = {
    baseUrl: srcApp,
    packages: ['transition'],
    paths: {
        jquery: '//code.jquery.com/jquery-2.2.0.min',
        vue: srcNodeModules + 'vue/dist/vue',
        // vuerouter: srcNodeModules + 'vue-router/dist/vue-router',
        // vueressource: srcNodeModules + 'vue-ressource/dist/vue-ressource',
        // barba: srcNodeModules + 'barba.js/dist/barba.min',
        // smoothstate: srcNodeModules + 'smoothstate/src/jquery.smoothState',
    },
    // shim: {
    //     'smoothstate': {
    //         deps: [ 'jquery' ],
    //         exports: 'smoothstate'
    //     }
    // }
};