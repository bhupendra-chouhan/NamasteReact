#Episode: 2 (Igniting Our App)

###Steps to create a react app from scratch:

```
1) Initialising npm using command : npm init
2) Installing a Web Application Bundler (ex. Parcel) : npm install -D parcel
3) Building our app using Parcel: npx parcel index.html
*Here source file of our project is index.html*
4) Now we will install React as a package to our code base: npm install react
5) Similarly now we'll install react-dom as well: npm install react-dom
6) Import react and react-dom in the App.js file, also the add type="module" attribute to the script tag which is used to import App.js in the index.html file and finally bundle the project using the command : "npx parcel index.html"
7) Command to create Devlopment Build: npx parcel index.html
*The development buil is get stored in the 'dist' directory.
8) Command to create Production Build: npx parcel build index.html
9) Configuring BrowsersList inside package.json file.
10) Finally, we have build our own React App from scratch.
```

### What is npm?

```
1) It does not stands for Node Package Manger, actually npm does not have any full form.
2) It BTS manages packages (i.e. node packages).
3) It's a standard repositary for all the packages.
4) When creae a react-app using command "npx create-react-app appName", it already contains npm in it.
5) It's one of the biggest package manager.
```

### What is npx?

```
It's using to wrote commands that executes node packages
```

### What is package.json and how its different from the package-lock.json file:

```
1) It's a configuration file for npm.
2) It keeps track of versions of all the npm packages installed in our project, but in case some packages get updated, then those version changes can not reflected insdie package.json file. Thats why we have package-lock.json file which tracks and locks the extact package version, and it keeps on updating the version values as the package's get updated.
3) package.json only stores the information of packages that you have manually installed for your project.
4) package-lock.json stores the information of packages that you have manually installed for your project as well as the information of their transitive dependencies/packages.
```

### Why we don't push node_modules to the github or production react application?

```
It's because if we have package-lock.json and package.json file with us then we can recreate all the node_modules mentioned in inside those file using the command : npm install
```

### ~ v/s ^ versions:

```
Let's say if there any type of update comes to a installed package then:
1) ~ (Tilde) : installs latest major update version of that package.
2) ^ (Caret): installs latest minor update version of that package.

NOTE: It's always safer to use the ^ versions over ~ versions.
```

### What is a Bundler:

```
1) It's job is to bundle/package/optimise your react app so that it can be shift to production.
2) It's one of the most important package in our project.
3) Webpack, Parcel, Vite are examples of Bundlers.
4) When we do "create-react-app", it basically uses webpack bundler BTS.
5) Code Bundling is done in the development phase not in the production phaees, that's why we will install 'parcel' as a dev dependencies using -D flag.
6) Command to install a Bundler: npm install -D parcel
```

### What does Parcel Bundler do to your React project:

```
1) It bundles the your react code base and creates a Dev-Build for you.
2) It creates a local server that keeps running at : http://localhost:1234/
3) It's using HMR(Hot Module Replacement) to continously refreshes the page
4) It uses a File Watching Algorithm to track the changes in the files and this algorithm is written in C++
5) It gives you faster builds because its Caching things up.
6) Parcel also does Image Optimisation of images in your project.
7) It also do Minification and Compression of your files.
8) It also does Content Hashing of every code update.
9) It does Code Splitting.
10) It does Differential Bundling - To make your web app supported by other and olders browsers.
11) It does Diagnostics of your app bts.
12) It does Error handling.
13) It allows us to test our project on both HTTP and HTTPs.
14) It does Tree Shaking : Removes unused/dead code.
15) It transpiles the code for us.
16) It has different Development and Production Builds or Bundles.
```

### Different types of Packages/Dependencies?

```
Types in which we can divide our installed dependencies are:
1) Dev Dependencies : They are generally required in the development phase.
2) Non-Dev or Normal Dependencies : These dependencies are used in production as well as development phase.
```

### What are Transitive Dependencies in npm?

```
Transitive dependency is one not imported directly into the project at hand, but instead imported by a direct dependency or another transitive dependeny.
```

### Why using React by import it via CDN is bad?

```
It's bad because:
1) Fetching from a CDN is a costly operation.
2) If you already have node_modules inside of our code base then it will way more easier to use React even without an internet connection.
```

### What is the use of BrowsersList?

```
1) Its a npm package. 
2) Its used to make our app compatible to other/older browsers.
3) In order to tell BrowsersList to which browsers we want to make our project compatible with, we need to configure it.
    "browserslist" : [
        "last 2 version",
        "cover 50% in US",
        "last 2 firefox version",
    ]
```
