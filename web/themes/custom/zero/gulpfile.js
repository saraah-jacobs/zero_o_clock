// Include commands from the packages
var   gulp    = require('gulp'),
      watch   = require('gulp'),
      plumber = require('gulp-plumber'),
      sass    = require('gulp-sass')(require('sass'));

// CSS task
function css() {
  return gulp
    .src('./scss/style.scss')
    .pipe(plumber())
    .pipe(sass({
      sourceComments: 'map',    // Add comments to the compiles css file
      sourceMap: 'sass',        // The comments will be mapped to the source scss file
      outputStyle: "expanded"   // Makes the css more human-readable. Setting to "nested" would make the file a bit smaller.
    }))
    .pipe(gulp.dest('./dist/css'));  // Output the css files in the css directory
}

// Watch files
function watchFiles() {
  // Monitor the scss directory for changes in the scss files.
  //  If there was a change, compile it into css
  gulp.watch('./scss/**/*.scss', css);
}


// Export the functions so we can call them from the command line
exports.watch = watchFiles;
exports.css = css;

// By setting the default, we can simply run 'lando gulp' to start watching for changes.
exports.default = watchFiles;
