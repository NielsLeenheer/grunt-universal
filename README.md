# grunt-universal

> Grunt plugin for making universal macOS binaries using @electron/universal

### Grunt
If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-universal --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-universal');
```

## The "universal" task

### Overview
In your project's Gruntfile, add a section named `universal` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
    universal: {
        mac: {
            'x64AppPath': 'build/tmp/HTML5test-darwin-x64/HTML5test.app',
            'arm64AppPath': 'build/tmp/HTML5test-darwin-arm64/HTML5test.app',
            'outAppPath': 'build/tmp/HTML5test-darwin-universal/HTML5test.app',
        }
    }
})
```

For each app that you want to notarize you can add a section. Each sections has a couple of options that you need to set, such the path to your x64 binary .app, the path to your arm64 binary .app and the path where you want your universal binary.app to be created. These options are documented in the [@electron/universal](https://github.com/electron/universal) project. Please read their documentation carefully. 
