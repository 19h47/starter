// JAVASCRIPT

var gulp    = require( 'gulp' ),
    rename  = require( 'gulp-rename' ),
    concat  = require( 'gulp-concat' ),
    uglify  = require( 'gulp-uglify' ),
    plumber = require( 'gulp-plumber' ),

    config = require( '../config' ).javascript;

gulp.task('javascript', function() {
    config.sources.forEach(function(source) {
        gulp.src( source.src )
            .pipe( plumber({
                errorHandler: function ( error ) {
                    console.log( error.message );
                    this.emit('end');
                }
            }))
            .pipe( concat( source.file ))
            .pipe( gulp.dest( config.dest ))
            .pipe( rename({ suffix: '.min' } ))
            .pipe( uglify() )
            .pipe( gulp.dest( config.dest + '/min/' ));
    });
});