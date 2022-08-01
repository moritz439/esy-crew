const sanitizeHtml = require('sanitize-html');
const { DateTime } = require("luxon");


module.exports = function (eleventyConfig) {
  // Copy the `css` directory to the output
  eleventyConfig.addPassthroughCopy('css/');
  eleventyConfig.addPassthroughCopy('assets/');

  // Watch the `css` directory for changes
  eleventyConfig.addWatchTarget('css/');
  eleventyConfig.addWatchTarget('assets/');

  eleventyConfig.ignores.add("README.md");
  eleventyConfig.ignores.add("_vorlagen");

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  eleventyConfig.addFilter("textPreview", (htmlString) => {
    debugger
    let san = sanitizeHtml(htmlString, {
      allowedTags: [],
      allowedAttributes: []
    }); 

    return san.substring(0, 200) + ' ...'
  });
};