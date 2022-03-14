# Static Starter Site

A static HTML site built with the JS page templating engine [11ty](https://www.11ty.dev/), styled with TailwindCSS, and deployed to Netlify.

# Why Static
This site needed to be built and deployed fast, with minimal effort needed to make changes to the pages while also providing a fast and responsive site for the user. This led to the use of Netlify and a JS based static site engine. This site also works as a first "test" if you will of how we can use static sites to cater to different client needs than what our larger WordPress sites provide.

# Development
## Installation
1. Pull Repo
2. `npm install`
3. `npm run dev`
4. make some pages!

## New Pages
To create new inner pages, create a new file in the root directory of the SRC folder(src>new-file). This file can be in the the template format of you choice, 11ty supports a wide array. However all of the current pages are in nunjucks (.njk) so this will be the easiest to reference. The file needs a basic header to enable templating:

```
    ---
    eleventyNavigation:
        key: *page title*
        title: *page title in nav*  
        order: *order to appear in nav*
    layout: pages/inner.njk
    title: *page title*
    data: *global json file if needed*
    prose: true *remove to disable prose on body*
    color: *the color of the h1*
    meta_desc: *the description of the meta tag*
    meta_author: *remove this tag unless you wish to overwrite the default author*
    footer: true *false to remove footer*
    bg: *bg color of main section, default to white*
    full_screen: false *main section full screen height*
    ---
```

## Images
To add images to a page through the templating engine, you must insert the img tag.
```
    {% img "file_name.png", "Alt Text", "Classes" %}
```
This tag will automatically prefix the image directory to the file name, as well as generate multiple sizes of images for the production build.

## Styling and Tailwind Config
This site is styled using the Tailwind CSS framework. At current all theme colors can be defined in the config file under any given names with default colors available including `black, white, currentColor, and transparent`. In addition this site includes the Tailwind typography suite (`prose`).

### Tailwind-JIT
This site makes use of the Tailwind Just-in-time compiler to provide realtime style changes while developing. In addition to this function, the JIT also provides the `!`(important) prefix for most tailwind classes, with this and the `important: html` declared at the top of the config, it is much simpler to override `prose` styling if needed. 

## Local Development
To enable auto reload upon file change, one needs to simply run `npm run dev`. This will auto build upon file save. *Important note that if changes are made to the CSS then you will need to save a file in the src directory to trigger another template build.*

# References
Netlify site: [Blissful-Bartik](https://app.netlify.com/sites/blissful-bartik-45737d/overview)

11ty documentation available here: [11ty.dev](https://www.11ty.dev/)

11ty Navigation plugin: [11ty.dev/docs/plugin/navigation](https://www.11ty.dev/docs/plugins/navigation/)

11ty Image plugin: [github.com/11ty/eleventy-img](https://github.com/11ty/eleventy-img)

Nunjucks documentation found here: [mozilla.github.io/nunjucks](https://mozilla.github.io/nunjucks/)

Tailwind CSS: [tailwindcss.com/docs](https://tailwindcss.com/docs)
