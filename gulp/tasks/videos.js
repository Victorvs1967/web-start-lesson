import del from 'del';
import gulpZip from 'gulp-zip';

export const videos = () => app.gulp.src(app.path.src.videos)
.pipe(app.plugins.plumber(app.plugins.notify.onError({
  title: 'VIDEOS',
  message: 'Error: <%= error.message %>'
})))
.pipe(app.plugins.newer(app.path.dest.videos))
.pipe(app.gulp.dest(app.path.dest.videos));