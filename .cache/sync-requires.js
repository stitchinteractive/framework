
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/ivan/Desktop/framework/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/ivan/Desktop/framework/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/ivan/Desktop/framework/src/pages/index.js")),
  "component---src-pages-quickstart-js": preferDefault(require("/Users/ivan/Desktop/framework/src/pages/quickstart.js")),
  "component---src-pages-totest-js": preferDefault(require("/Users/ivan/Desktop/framework/src/pages/totest.js"))
}

