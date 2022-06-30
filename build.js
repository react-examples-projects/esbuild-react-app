const path = require("path");
const postcss = require("postcss");
const autoprefixer = require("autoprefixer");
const postcssPresetEnv = require("postcss-preset-env");
const { start, sendReload } = require("esbuild-dev-server");
const { build } = require("esbuild");
const { sassPlugin } = require("esbuild-sass-plugin");
const { ESLint } = require("eslint");

const BUILD_PATH = path.resolve(__dirname, "./public/static");

const eslint = () => ({
  name: "eslint",
  setup(build) {
    let codeResult = "";
    const eslint = new ESLint({
      cwd: path.resolve(__dirname, "./src"),
    });

    build.onStart(() => {
      codeResult = "";
      console.clear();
      console.log("Checking your code...");
    });

    build.onEnd(() => {
      console.clear();
      console.log(codeResult);
    });

    build.onLoad({ filter: /\.(jsx?|js?)$/ }, async ({ path }) => {
      if (path.match(/node_modules/)) return;
      try {
        const result = await eslint.lintFiles(path);
        const formatter = await eslint.loadFormatter("stylish");
        const output = formatter.format(result);
        if (output.length > 0) {
          codeResult += output + "\n";
        }
      } catch (err) {
        console.log(err);
      }
    });
  },
});

start(
  build({
    entryPoints: [path.resolve(__dirname, "./src/index.js")],
    minify: true,
    outfile: path.resolve(BUILD_PATH, "bundle.min.js"),
    bundle: true,
    sourcemap: false,
    incremental: true,
    inject: [path.resolve(__dirname, "./react-shim.js")], // auto import react per file
    plugins: [
      eslint(),
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
