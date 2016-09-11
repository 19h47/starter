var gulp = require('gulp');

// BUILD

gulp.task( 'build', [ 'sass', 'javascript', 'svg'/*, 'minify'*/] );

// DEFAULT

gulp.task( 'default', [ 'build', 'watch'] );