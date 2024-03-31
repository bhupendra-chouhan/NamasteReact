const path = require("path"); // Node's Buil-in "path" module.
const HTMLWebpackPlugin = require("html-webpack-plugin"); // used to Load our bundled JS file into an HTML file

module.exports = {
  entry: path.resolve(__dirname, "./App.js"), // Entery point of out App: This path tells the webpack which file to use to creae a Dependency Graph(It's used to resolve modules that are dependent on one another while also building the modules that are required by other modules first.)

  output: {
    path: path.join(__dirname, "./dist/"), // output location of build files
    filename: "App.js", // webpack combines code of all the js files into single App.js (or sometimes named as bundle.js) file
    publicPath: '/',
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: "./index.html", // This tells webpackto inject the bundled files it generates into an HTML file in the root dir
    }),
  ],

  // Informing webpack the loader that we will be using, specifically we'll be using 'Babel-loader'.
  module: {
    // What we pass inside this 'module' object determines how different types of modules in our project will be treated.
    //   We then use the 'rules' key to specify how them modules is created. 'Rule' is an array of object, where each object is a rule.
    rules: [
      {
        test: /\.(js)$/, // This rule tells webpack that we are going to use babel to transpile all files that ends in '.js'
        exclude: /node_modules/, // This tells Babel to not transpile folders or JS files that are located in 'node_modules'.
        use: {
          loader: "babel-loader", // Specifying the loader that we wanna use for transpilation task.
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(css)$/i,
        include: path.resolve(__dirname, './'),
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(jpe?g|gif|png)$/i,
        include: path.resolve(__dirname, './src/utils/'),
        use: ['file-loader'],
      },
    ],
    },
    devServer: {
      static: path.resolve(__dirname, "./dist/"),
      historyApiFallback:true
  },
};
