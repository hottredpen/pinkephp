var gulp = require('gulp');
var gulpsync = require('gulp-sync')(gulp);

//gulp.task('default', gulpsync.sync(['clean', ['less', 'images', 'js'],'rev','watch']));
gulp.task('default', gulpsync.sync([ ['less', 'images', 'js'],'rev','rename']));

//gulp.task('deploy', gulpsync.sync(['clean', ['less-deploy', 'imagemin'],'rev']));
gulp.task('deploy', gulpsync.sync([ ['less-deploy', 'imagemin'],'rev']));

// 将pagename里面的替换掉
gulp.task('rename', gulpsync.sync(['admin_page_rename','cms_page_rename']));