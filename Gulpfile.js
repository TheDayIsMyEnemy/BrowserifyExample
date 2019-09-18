var gulp = require("gulp");
var uglify = require('gulp-uglify');
var browserify = require("browserify");
var streamify = require('gulp-streamify')
var source = require('vinyl-source-stream')
var fs = require("fs");

function scripts() {
  return browserify("./js/game.js")
  .transform("babelify", {presets: ["@babel/preset-env"], plugins: ["@babel/plugin-proposal-class-properties"]})
  .bundle()
  .pipe(source("scripts.min.js"))
  .pipe(streamify(uglify()))
  .pipe(gulp.dest("./"));
}

function build() {

}


exports.default = scripts;