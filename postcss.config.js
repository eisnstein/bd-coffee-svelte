const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./src/**/*.svelte", "./public/index.html"],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    purgecss
    //...(process.env.NODE_ENV === "production" ? [purgecss] : [])
  ]
};
