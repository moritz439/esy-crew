const { DateTime } = require("luxon");
const pluginSass = require("eleventy-plugin-sass");

module.exports = function (eleventyConfig) {
    // Copy the `css` directory to the output
    eleventyConfig.addPassthroughCopy('css/');
    eleventyConfig.addPassthroughCopy('assets/');
  
    // Watch the `css` directory for changes
    eleventyConfig.addWatchTarget('css/');
    eleventyConfig.addWatchTarget('assets/');


    eleventyConfig.addPlugin(pluginSass);

    eleventyConfig.addFilter("postDate", (dateObj) => {
      return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });
  };