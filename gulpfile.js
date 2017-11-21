//引入gulp包
var gulp = require("gulp");
//加载htmlmin模块
var htmlmin = require("gulp-htmlmin");
//加载scss模块
var sass = require("gulp-sass");
//加载cssnano模块，压缩css代码
var cssnano = require("gulp-cssnano");
//加载imagemin模块
var imagemin = require("gulp-imagemin");
//加载js压缩模块
var uglify = require("gulp-uglify");
//gulp.task注册任务
gulp.task("html",function(){
    //指明路径
    gulp.src("src/*.html")
    //执行任务
        .pipe(htmlmin({
            collapseWhitespace:true,
            removeComments:true
        }))
        //gulp.dest发布构建之后的文件到dist文件夹下
        .pipe(gulp.dest("dist"))
});
gulp.task("scss",function(){
    gulp.src("src/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("dist/scss"))
        .pipe(cssnano())
        .pipe(gulp.dest("dist/scss"))
});
gulp.task("image",function(){
    gulp.src("src/image/*.*")
        .pipe(imagemin())
        .pipe(gulp.dest("dist/image"))
});
gulp.task("js",function(){
    gulp.src("src/js/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("dist/js"))
});

gulp.task("watch",["html","scss","image","js"],function(){
    gulp.watch("src/*.html",["html"]);
    gulp.watch("src/scss/*.scss",["scss"]);
    gulp.watch("src/image/*.*",["image"]);
    gulp.watch("src/script/*.js",["js"]);
});

gulp.task("default",["watch","html","scss","image","js"],function(){
    gulp.start("watch","html","scss","image","js");
})
