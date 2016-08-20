var gulp = require('gulp');
var embed = require('gulp-angular2-embed-templates');
var ts = require('gulp-typescript');
var merge = require('merge2');
var tsConfig = require('./tsconfig.json');

function transpile() {
    var tResult = gulp.src(["./bcomponents/**/*.ts", "./typings/**/*"])
        .pipe(embed())
        .pipe(ts(tsConfig.compilerOptions));

    return merge([
        tResult.dts.pipe(gulp.dest('./lib')),
        tResult.js.pipe(gulp.dest('./lib'))
    ]);
}

gulp.task('tsc', transpile)