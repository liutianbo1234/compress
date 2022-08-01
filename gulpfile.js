var gulp = require('gulp');
var uglify = require("gulp-uglify");
var inlinesource = require('gulp-inline-source');
var htmlmin = require('gulp-htmlmin'); //压缩html
var notify = require('gulp-notify');   //提示
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');   //文件重命名
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var srcs = {
    'inlinesource': ['./import/src/views/**/*.html'],
    'index':['./import/*.html'],
    'assets':['./import/assets/**/*.js'],
    'extendJS':['./import/extends/**'],
    'layui':['./import/layui-v2.6.8/**/*'],
    'thirdParty':['./import/thirdParty/**/*'],
    'static':['./import/static/img/*'],
    'minifycss':['./import/src/css/*.css'],
    'copyStore':['./import/src/models/*.js']
}
gulp.task('inlinesource', function () {
    var options = {
        removeComments: true, //清除HTML注释
        collapseWhitespace: true, //压缩HTML
        minfyJS: true,//压缩JS
        minfyCss: true,//压缩CSS
    };
    return  gulp.src(srcs.inlinesource)
        .pipe(htmlmin(options))
        .pipe(gulp.dest('dist/src/views'))
        .pipe(notify({message:'views打包成功'}));   //提示成功
});
gulp.task('index', function () {
    var options = {
        removeComments: true, //清除HTML注释
        collapseWhitespace: true, //压缩HTML
        minfyJS: true,//压缩JS
        minfyCss: true,//压缩CSS
    };
    return  gulp.src(srcs.index)
        .pipe(htmlmin(options))
        .pipe(gulp.dest('dist'))
        .pipe(notify({message:'views打包成功'}));   //提示成功
});

gulp.task('extendJS', function (done) {
    gulp.src(srcs.extendJS)
    .pipe(gulp.dest('dist/extends'))
    .pipe(notify({message:'copy成功'}));   //提示成功
    done()
})

gulp.task('layui', function (done) {gulp.src(srcs.layui)
    .pipe(gulp.dest('dist/layui-v2.6.8'))
    .pipe(notify({message:'layui copy成功'}));   //提示成功
    done()
  })
  gulp.task('thirdParty', function (done) {
      gulp.src(srcs.thirdParty)
    .pipe(gulp.dest('dist/thirdParty'))
    .pipe(notify({message:'thirdParty copy成功'}));   //提示成功
    done()
  })

gulp.task('assets', function (done) {gulp.src(srcs.assets)
    .pipe(uglify())  //压缩
    .pipe(gulp.dest('dist/assets'))
    done()
})

gulp.task('copyStore', function (done) {
    gulp.src(srcs.copyStore)
    .pipe(uglify())  //压缩
    .pipe(gulp.dest('dist/src/models'))
    done()
})
gulp.task('testImagemin', function (done) {
    gulp.src(srcs.static)
        .pipe(imagemin({
            optimizationLevel: 5,// 取值范围：0-7（优化等级），默认：3
            progressive: true,// 无损压缩jpg图片，默认：false
            interlaced: true, 	// 隔行扫描gif进行渲染，默认：false
            svgoPlugins: [{removeViewBox: false}],//不要移除svg的viewbox属性
            use: [pngquant()] //使用pngquant深度压缩png图片的imagemin插件
        }))
        .pipe(gulp.dest("dist/static/img"))
        .pipe(notify({message:'图片添加成功'}))  //提示成功;
        done()
})


gulp.task('minifycss',function(done){
  gulp.src(srcs.minifycss)      //设置css
        .pipe(minifycss())                    //压缩文件
        .pipe(gulp.dest('dist/src/css'))            //输出文件目录
        .pipe(notify({message:'css打包成功'}))
        done();
 });
gulp.task('default', gulp.series('inlinesource','index','assets','extendJS','layui','thirdParty','testImagemin','copyStore','minifycss',function (done) {
    done()
}));
