module.exports = function (eleventyConfig) {
  eleventyConfig
    .addPassthroughCopy("./src/style.css")
    .addPassthroughCopy("./src/**/*.{jpg,png,gif,svg,kmz,zip,css,webp}");
};
