'use strict';

var gulp = require('gulp'),
    shell = require('gulp-shell');

gulp.task('build_example', function () {
    return gulp.src('examples/*-*/')
    .pipe(
        shell(['cd <%=file.path %>;npm install ../..;npm prune;npm install;npm run-script build'])
    );
});

gulp.task('watch_document', function () {
    return gulp.watch(['index.js', 'lib/*.js'], ['build_document']);
});

gulp.task('build_document', shell.task('jsdoc -p -d documents index.js lib/*.js'));
