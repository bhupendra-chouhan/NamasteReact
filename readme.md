# <div style="text-align: center; color: #E3651D;" markdown="1">Episode wise React JS HandWritten / HandTyped Notes</div>

#### <div style="text-align: center; color: #008170;" markdown="1">⬇️(Scroll Down to reach your required episode)⬇️</div>

---

## *Episode: 2 (Igniting Our App)*

### Steps to create a react app from scratch:

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

---

## *Episode: 3 (Laying the Foundation)*

### Steps to create a react app from scratch:

```
11) Configuring "script" inside the package.json file.
```

### Adding customised Script for different operations?

```
inside package.json, add this:
  "scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html",
    "test": "jest"
  },

Now your can run scripts like:
-> npm run start or npm start
-> npm run build
```

### What and why JSX (JavaScript XML)?

```
1) It's a syntax extension to JavaScript.
2) It's makes the traditional way of creating React Elements, way more easy and intuit.
3) React is different and JSX is different. We can write react applications without using JSX.
4) JSX is not HTML in JS, but its has HTML or XML like syntax to it.
5) If we have to give an Attribute to a tag, then we have to name them in Camel Case(like: className, tabIndex, etc.).
6) JSX can prevent Cross-Site Scripting(XSS) Attack.
```

### What is Babel? What does Babel do?
```
1) Babel is a JS compiler or transpiler.
2) It converts JSX into the react code that browser/JS enginer/react undersands.
3) It can convert ES6 JS to older version of JS so that older/other browsers can undersand.
4) It's another important package after Parcel in our react app.
```

### What are Components?
```
Components are independent and reusable bits of code.
React Functional Components are simple JS functions with 'PascalCase' naming convention that returns a JSX.
``` 

### Type of Components?
```
Components are of two types:
  -> 1. Class Based Components (OLD)
  -> 2. Functional Components (NEW)
``` 

### What are Functional Components?
```
1) React Functional Components are simple JS functions that returns a JSX. 
2) Since JSX is a react element. Therefore, JS Functions that returns a react element is called a Functional Component. 
3) Naming convention : PascalCase
``` 

### What is Component Compositions?
```
1) It's basically nesting of one component inside another component.
2) In JSX we can put:
  a. Component inside Component
  b. Component inside React Element
  c. React Element inside React Element
  d. React Element inside Component
```

### What does .render({}) do?
```
1) .render({}) takes Object that can be a:
    a. 'React Element' as a 'Variable' or 
    b. 'React Component' as a 'Tag')
2) It replaces the content inside the "root" element with the React Component which it takes as an argument.
```

---

## *Episode: 4 (Talk is Cheap, Show me the Code)*

### Planning of our React App.
```
Before we go into the code and building our app part, we need to do the planning of our app.

Planning Includes steps given below:
1) Design a wireframe/UI (go to: ./Episode/wireframe.png)
2) Low level planning, it includes:
  a. Think of components your app will going to have like:
      <Header/>
        -<Logo/>
        -<NavItems/>
      <Body/>
        -<Search/>
        -<RestaurantContainer/>
          --<RestaurantCard/>
      <Footer/>
        -<Copyright/>
        -<Links/>
        -<Address/>
        -<Contact/>
```

### What are Props?
```
  1) These are the objects where the value of attributes of a tag is stored. 
  2) "props" stands for "Properties".
  3) Passign "props" to a component, is similar to passing arguments to a function.
  4) Whenever we have to pass in data to a particular component we pass it as a "prop"
```

### What is Config Driven UI?
```
  Config-driven UI is a technique that allows you to create user interfaces based on a configuration file, such as JSON, or a TypeScript file that defines the layout and content of the UI components. 
```

### What is Optional Chaining Operator(?.)?
```
Let's say we have an object person:

    const person = {
        firstName: "Bhupi",
        Age: 21,
        // vehicle: { // when this is 'present' v/s 'not present' 
        //     car : "Lambo"
        // }
    }

// alternate of optional chaining (using ?:):
const vehicleCar1 = person.vehicle ? person.vehicle.car : undefined

// Optional chaining (using ?.):
const vehicleCar2 = person.vehicle?.car

/* Optional Chaining: It says if person.vehicle is present than return person.vehicle.car else it will return 'undefined' (which is default behaviour of JS) */

console.log(person.vehicleCar) // undefined
console.log(vehicleCar1) 
console.log(vehicleCar2)
```

### Why should we use the "key" attribute everytime we use a loop to iterate over an iterator in ReactJS?
```
1) In ReactJS, when you're iterating over an array and rendering components based on its elements, it's important to include a "key" attribute for each rendered component. 
2) The "key" attribute serves as a unique identifier for each component in the list. React uses this identifier to efficiently update the virtual DOM and determine which components need to be added, removed, or updated when the underlying data changes.
3) We generally give 'unique values or IDs' to the 'key attribute'.
4) When using .map(), .filter(), .reduce() or .forEach() we can use 'index' as a 'key' 
5) Since using "key" attributes in big projects can led to inconsistency, thats why we got useId() hook in React. 
```
### 

---

## *Episode: 5 (Let's get Hooked)*

### Types of import/export?
```
1) Default Import/Export:
    a)  Default Exporting:
      export default VarName;

    b)  Default Importing:
      import VarName from "./path";

2) Named Import/Export:
    a)  Named Exporting:
      export {VarName1, VarName2};
      or
      export const VarName1={};
      export const VarName2={};
      
    b)  Named Importing:
      import {VarName1, VarName2} from "./path";

NOTE: If we use Default and Named export at the same time in a file(i.e. fileA), then in the file where we are importing(i.e. fileB), we can do import either using 'Default or Named Import'.
```

## <div style="text-align: center; color: #E3651D; font-style: italic;" markdown="1">-: React Hooks :-</div>

### What are React Hooks?
```
1) BTS React Hooks are normal JavaScript Utility functions written Facebook developer and these react.
2) Two most used React Hooks are:
    a) UseState()
    b) UseEffect()
```

### How useState() Hook works?
```
1) Local State Variable(Super Powerful Variable provide by ReactJS): 
      a. It maintains the state of a component.
      b. Its scope is inside of the component inside which it is declared.
```