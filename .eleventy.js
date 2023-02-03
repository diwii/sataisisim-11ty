const fs = require("fs");

module.exports = ((eleventyConfig) => {
    // GLOBAL DATA
    eleventyConfig.addGlobalData("googleSiteKey", "6LeI1ooUAAAAAC9QMXNuoXnu13p-OLapLFavLC0J");

    // DEV to watch for style changes and refresh browser
    eleventyConfig.setBrowserSyncConfig({
		files: './_site/css/**/*.css'
	});

    // LAYOUT ALIASES
    eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');
    eleventyConfig.addLayoutAlias('homepage-main', 'layouts/homepage-main.njk');
    
    // CUSTOM FILTER
    // eleventyConfig.addFilter("filesize", (path) => {
    //     let stat = fs.statSync(path);
    //     if (stat) {
    //         return (stat.size/1024).toFixed(2) + ' KB'
    //     }

    //     return '';
    // });

    // COPY FILES
    eleventyConfig.addPassthroughCopy('src/img/');
    eleventyConfig.addPassthroughCopy('src/js/');
    eleventyConfig.addPassthroughCopy('src/favicon.ico');

    return {
        dir: {
            input: "src",
            includes: "_includes",
            data: "_data",
            output: "_site"
        }
    };
});
