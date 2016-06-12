var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    useref = require('gulp-useref'),
    cleanCSS = require('gulp-clean-css')

gulp.task('default',function(){
    //压缩模版页
    gulp.src(['template/*.html'])
        .pipe(useref({}, function() {
            return uglify();
        }))
        .pipe(gulp.dest('publish/template'))

    //压缩首页
    gulp.src(['index.html'])
        .pipe(useref({}, function() {
            return uglify();
        }))
        .pipe(gulp.dest('publish'))

    //压缩css
    gulp.src('css/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('publish/css'))

    //移动图片文件夹
    gulp.src(
        ['img/*','img/**/*'], {
            base: './'   //如果设置为 base: 'js' 将只会复制 js目录下文件, 其他文件会忽略
        }
    ).pipe(gulp.dest('publish'));
});


gulp.task('watch', function () {
   gulp.watch(['template/*.html','index.html','css/*.css'], ['default']);
});