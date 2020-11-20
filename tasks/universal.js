module.exports = function(grunt) {
    const {makeUniversalApp} = require('@electron/universal');
    const path = require('path');
    const fs = require('fs');

    grunt.registerMultiTask('universal', async function(command) {
        let done = this.async();

        let directory = path.dirname(this.data.outAppPath);

        if (!fs.existsSync(directory)) {
            fs.mkdirSync(directory);
        }

        try {
            await makeUniversalApp({
                x64AppPath: path.resolve(this.data.x64AppPath),
                arm64AppPath: path.resolve(this.data.arm64AppPath),
                outAppPath: path.resolve(this.data.outAppPath),
            });
        } catch (e) {
            done(false);
        }

        done(true);
    });
};
