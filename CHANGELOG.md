

## 3.0.0 - 2015-09-24
- Release v3.0.0 / npm@v3.0.0
- bundles and CDNs
  + browserify, minified, and standalone builds
  + 845 bytes - browserified, gzipped and minified
  + 1676 bytes - browserified and minified
- allow passing custom context
- drop callback api, use something like `jstransformer`
- add `.render` and `.compile` methods
- update boilerplate and refactor

## 2.0.0 - 2015-08-04
- Release v2.0.0 / npm@v2.0.0
- **Heads up**, if have error and dont have callback (sync api) it will throw the err
- it will contain template code string in `err._templateCode`
- update scripts
- expose to CDNs
- friendlier readme
- use browserify and uglify-js
- update boilerplate

## 1.0.1 - 2014-12-30
- Release v1.0.1 / npm@v1.0.1
- add `examples/` dir for node and browser examples
- add `dist/` dir for browser and cdn usage. There will live and minified version.
- add browser "installation" (with script tag, lol)

## 1.0.0 - 2014-12-30
- Release v1.0.0 / npm@v1.0.0
- update code style
- jshint, jscs, dotfiles, coverage, etc
- nothing special

## 0.0.0 - 2014-06-09
- Initial commit