'use strict'

const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync");


gulp.task("sass", function() { // Создаем таск "sass"
  return gulp.src("sass/main.scss") // Берем источник
    .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
    .pipe(gulp.dest("css")) // Выгружаем результата в папку app/css
    .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

gulp.task("browser-sync", function() { // Создаем таск browser-sync
  browserSync({ // Выполняем browser Sync
    server: { // Определяем параметры сервера
      baseDir: "" // Директория для сервера - app
    },
    notify: false // Отключаем уведомления
  });
});

gulp.task("watch", ["browser-sync", "sass"], function(){
  gulp.watch("sass/**/*.scss", ["sass"]) // Наблюдение за sass файлами
  gulp.watch("*.html", browserSync.reload); // Наблюдение за HTML файлами в корне проекта
  gulp.watch("js/**/*.js", browserSync.reload); // Наблюдение за JS файлами в папке js
});

gulp.task("default", ["watch"]);

gulp.task("clear", function() {
  return cache.clearAll();
})
