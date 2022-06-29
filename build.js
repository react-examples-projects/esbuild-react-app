const postcss = require("postcss");
const autoprefixer = require("autoprefixer");
const postcssPresetEnv = require("postcss-preset-env");
const path = require("path");
const { start, sendReload } = require("esbuild-dev-server");
const { build } = require("esbuild");
const { sassPlugin } = require("esbuild-sass-plugin");

const BUILD_PATH = path.resolve(__dirname, "./public/static");

start(
  build({
    entryPoints: [path.resolve(__dirname, "./src/index.js")],
    minify: true,
    outfile: path.resolve(BUILD_PATH, "bundle.min.js"),
    bundle: true,
    sourcemap: false,
    incremental: true,
    plugins: [
      sassPlugin({
        async transform(source) {
          const { css } = await postcss([
            autoprefixer,
            postcssPresetEnv({ stage: 0 }),
          ]).process(source, { from: undefined });
          return css;
        },
      }),
    ],
    loader: {
      ".svg": "dataurl",
      ".png": "dataurl",
      ".jpg": "dataurl",
      ".jpge": "dataurl",
      ".js": "jsx",
      ".woff": "dataurl",
      ".woff2": "dataurl",
      ".eot": "dataurl",
      ".ttf": "dataurl",
    },
    define: {
      "process.env.NODE_ENV": "'production'",
    },
  }),
  {
    port: "3000",
    watchDir: path.resolve(__dirname, "./src"),
    index: path.resolve(__dirname, "./public/index.html"),
    staticDir: path.resolve(__dirname, "./public"),
    onAfterRebuild() {
      sendReload();
    },
  }
);