// 11ty configuration
const Image = require("@11ty/eleventy-img");
const path = require("path");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
module.exports = config => {

  config.addPassthroughCopy("src/img/bg-**");
  config.addPassthroughCopy("src/assets");
  config.addPassthroughCopy("dist");
  config.addPlugin(eleventyNavigationPlugin);
  config.addWatchTarget("./css/");
  config.addWatchTarget("./dist/");

  //images {% img "/images/00.jpeg", "this is an alt description" %}
  config.addNunjucksAsyncShortcode("img", async (src, alt, _class) => {

    if (!alt) {
      throw new Error(`Missing \`alt\` on myImage from: ${src}`);
    }
    src = "src/img/" + src;

    let stats = await Image(src, {
      widths: [25, 320, 640, 960, 1200, 1800, 2400, null],
      formats: ["jpeg", "webp"],
      outputDir: "publish/img/",
      filenameFormat: function (id, src, width, format, options) {
        const extension = path.extname(src);
        const name = path.basename(src, extension);
    
        return `${name}-${width}w.${format}`;
      },
      sharpWebpOptions: {
        lossless: true
      }
    });

    let lowestSrc = stats["jpeg"][0];

    const srcset = Object.keys(stats).reduce(
      (acc, format) => ({
        ...acc,
        [format]: stats[format].reduce(
          (_acc, curr) => `${_acc} ${curr.srcset} ,`,
          ""
        ),
      }),
      {}
    );

    const source = `<source type="image/webp" srcset="${srcset["webp"]}" >`;

    const img = `<img
      class="${_class}"
      loading="lazy"
      alt="${alt}"
      src="${lowestSrc.url}"
      srcset="${srcset["webp"]}">`;

    return `${source} ${img}`;
  });
  /////////////
    // 11ty defaults
    return {
  
      dir: {
        input: 'src',
        output: 'publish'
      }
  
    };
  };