// SASS

var gulp            = require( 'gulp' ),
    sass            = require( 'gulp-sass' ),
    nano            = require( 'gulp-cssnano' ),
    autoprefixer    = require( 'gulp-autoprefixer' ) ,
    sourcemaps      = require( 'gulp-sourcemaps' )
    csso            = require( 'gulp-csso' ),
    mmq             = require( 'gulp-merge-media-queries' ),
    concat          = require( 'gulp-concat' ),
    plumber         = require( 'gulp-plumber' ),
    rename          = require( 'gulp-rename' ),

    config          = require('../config').sass,
    minify          = require('../config').minify;

gulp.task('sass', function() {
    gulp.src( config.src )
        .pipe( plumber({
            errorHandler: function ( error ) {
                console.log( error.message );
                this.emit( 'end' );
            }
        }))
        .pipe( sourcemaps.init({
                loadMaps: true,
                // includeContent: false, 
                // sourceRoot: '../'
            }))
        .pipe( sass({
            includePaths: config.deps,
            outputStyle: 'expanded',
        }).on('error', sass.logError))
        // .pipe( concat( config.vendors ))
        .pipe( autoprefixer({ 
                browsers: minify.supported, 
                add: true 
            }) )
        .pipe( mmq() )
        .pipe( csso() )
        // .pipe( sourcemaps.write( 'maps' ))
        .pipe( gulp.dest( config.dest ))
        ;

});