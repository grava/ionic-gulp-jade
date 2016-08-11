# ionic-gulp-jade
simple jade compiler for ionic v2

## API

### jadeBuild([options])

Returns a [stream](http://nodejs.org/api/stream.html) of [Vinyl files](https://github.com/wearefractal/vinyl-fs)
that can be [piped](http://nodejs.org/api/stream.html#stream_readable_pipe_destination_options).

#### Available options:
- **src** (String|Array) Glob or array of globs ([What's a glob?](https://github.com/isaacs/node-glob#glob-primer)) matching jade entry files. Default: `'app/**/*.jade'`.
- **dest** (String) Output path for the compiled CSS bundle(s). Default: `'www/build/'`.
- **jadeOptions** (Object) [jade-lang options](https://github.com/lord/gulp-jade#options). Default:
```
{
  pretty: true
}
```
- **onError** (Function) Error handler when there are errors in the Sass stream. Default:
```
function(err) {
  console.error(err.message);
  this.emit('end');
}
```

## Example

```
var jadeBuild = require('ionic-gulp-jade');

gulp.task('jade', jadeBuild);

gulp.task('jade', function(){
  return jadeBuild({
    dest: 'www/my-custom-build-dir',
  });
});
```


