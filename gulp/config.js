// CONFIG
// To clean the modules that are not used in package.json but still installed : 'npm prune' in terminal.

// SOURCE OF FILES
var src                     =   './src',

// NAMES OF FILES
    fileCSS                 =   'global.css',
    fileJS                  =   'functions.js',

// DESTINATION OF FILES
    dest                    =   "./dist",

// Option for gulp-cssnano ( https://github.com/ben-eb/gulp-cssnano )
    browserSupported        = [ 'last 2 versions', 'safari >= 8', 'ie >= 9', 'ff >= 20', 'ios 6', 'android 4' ];

module.exports = {
    sass: {
        // Source of CSS files
        src: [
            // './node_modules/flexboxgrid/css/flexboxgrid.css',
            src + '/scss/global.scss'
        ],

        deps: [
            // './node_modules/typesettings',
            './node_modules/ress',
            './node_modules/breakpoint-sass/stylesheets',
            './node_modules/breakpoint-slicer/stylesheets',
            './node_modules/bootstrap-sass/assets/stylesheets',
            // './node_modules/typi/scss',
        ],

        vendors: [
            // './node_modules/remodal/dist/remodal.css',
            // './node_modules/remodal/dist/remodal-default-theme.css',
        ],


        // Source to watch
        srcWatch: src + '/scss/*/**',
        file: fileCSS,
        // Destination
        dest: dest + '/css'
    },

    javascript: {
        // Source to watch
        srcWatch: src + '/js/*.js',
        // Destination
        dest: dest + '/js',
        // Source of Javascript files
        sources: [
            {
                src: [
                    './node_modules/feature.js/feature.js'
                ],
                file: 'feature.js'
            },
            {
                src: [
                    // './node_modules/barba.js/dist/barba.min.js',
                    './node_modules/svg4everybody/dist/svg4everybody.min.js',
                    './node_modules/jQuery.fakeSelect/js/min/jquery.fakeSelect.min.js',
                    './node_modules/wallop/js/Wallop.min.js',
                    './node_modules/instafeed.js/instafeed.js',
                    './node_modules/twitter-fetcher/js/twitterFetcher.js',
                    // src + '/js/functions.js',
                    src + '/js/page.js',
                    src + '/js/slider.js',
                    src + '/js/menu.js',
                    src + '/js/instagram.js',
                    src + '/js/twitter.js',
                    src + '/js/app.js', // should always be the last
                ],
                file: 'functions.js'
            }
        ]
    },

    minify: {
        src: dest + '/css/' + fileCSS,
        srcWatch : src + '/scss/**',
        dest: dest + '/css/min',
        supported: browserSupported,
    },

    svg: {
        src: 'img/svg/icons/*.svg',
        srcWatch: 'img/svg/icons/*.svg',
        dest: dest + '/svg',
    },
};
