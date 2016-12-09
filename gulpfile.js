
//导入工具包 require('node_modules里对应模块')
var gulp = require("gulp"), //本地安装gulp所用到的地方
    browserSync = require('browser-sync').create(),
    argv = require('yargs').argv;

var proxy = argv.proxy;
// gulp.task('browser-sync', function () {
//     browserSync.init({
//         server: {
//             baseDir: "./"
//         }
//     });
// });

// http://nodejs.cn/ drivers  certmgr.msc
gulp.task('browser-sync', function () {

    browserSync.init({
        proxy: proxy || "localhost:8000",
        port:80
    });
    //  gulp.watch("*.html").on("change", browserSync.reload);
});




gulp.task("default", ['browser-sync']);


//gulp.task(name[, deps], fn) 定义任务  name：任务名称 deps：依赖任务名称 fn：回调函数
//gulp.src(globs[, options]) 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组) 
//gulp.dest(path[, options])处理完后文件生成路径

// gulp 只有你需要熟知的参数标记，其他所有的参数标记只在一些任务需要的时候使用。

// -v 或 --version 会显示全局和项目本地所安装的 gulp 版本号
// --require <module path> 将会在执行之前 reqiure 一个模块。这对于一些语言编译器或者需要其他应用的情况来说来说很有用。你可以使用多个--require
// --gulpfile <gulpfile path> 手动指定一个 gulpfile 的路径，这在你有很多个 gulpfile 的时候很有用。这也会将 CWD 设置到该 gulpfile 所在目录
// --cwd <dir path> 手动指定 CWD。定义 gulpfile 查找的位置，此外，所有的相应的依赖（require）会从这里开始计算相对路径
// -T 或 --tasks 会显示所指定 gulpfile 的 task 依赖树
// --tasks-simple 会以纯文本的方式显示所载入的 gulpfile 中的 task 列表
// --color 强制 gulp 和 gulp 插件显示颜色，即便没有颜色支持
// --no-color 强制不显示颜色，即便检测到有颜色支持
// --silent 禁止所有的 gulp 日志
// 命令行会在 process.env.INIT_CW 中记录它