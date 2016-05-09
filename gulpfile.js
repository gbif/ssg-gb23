var gulp = require('gulp'),
    gutil = require('gulp-util'),
    config = require('./config.js'),
    ssgTasks = require('gbif-ssg'); //for production
    //ssgTasks = require('../ssg/index.js'); //easier when developing the core. For testing only

global.rootRequire = function(name) {
    return require(__dirname + '/' + name);
};

gulp.task('development', ssgTasks.developmentTask);

gulp.task('production', ssgTasks.productionTask);

//Custom added build to handle mapbox images. Might be worth just using a cdn instead for the maps even though it requires multiple calls. It is not critical if it fails.
var mapImages = function(){
    return gulp.src(config.mapImg.src)
        .pipe(gulp.dest(config.mapImg.dest));
};

//specifies the default set of tasks to run when you run `gulp`.
if (gutil.env.production) {
    gulp.task('default', ['production'], mapImages);
} else {
    gulp.task('default', ['development'], mapImages);
}