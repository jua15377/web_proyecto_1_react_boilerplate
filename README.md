# React-Boilerplate
Ready to use boilerplate for your React projects. This template includes the essential packages for your development stack. For a detail about the package see [tools](#tool). 

Additionally, it includes an example of a calculator implemented in ReactJs, and a little test suit.


## Table of Contents
1. [ Tools. ](#tool)
2. [ Installation. ](#inst)
3. [ Usage. ](#usage)
4. [ Tests. ](#test)
5. [ Linting. ](#lint)
6. [ Autor. ](#autor)



<a name="tool"></a>
## Tools
This boilerplate comes with the following tools ready to work!

- **React:** A JavaScript library for building user interfaces. [details](https://reactjs.org/)
- **Babel:** Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. [details](https://babeljs.io/)
- **Webpack:**  Is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph which maps every module your project needs and generates one or more bundles.[Details](https://webpack.js.org/)
- **ESLint:**  Is an open source project originally created by Nicholas C. Zakas in June 2013. Its goal is to provide a pluggable linting utility for JavaScript. This template comes preloaded with the React and AirBnb styles with some modifications. [details](https://eslint.org/)
- **File-loader:** A file loader module for webpack[details](https://github.com/webpack-contrib/file-loader)
- **style-loader:** A css loader module for webpack[details](https://github.com/webpack-contrib/style-loader)
- **html-webpack-plugin** let the template .txt generate the html for you. [details](https://github.com/jantimon/html-webpack-plugin)
- **Jest:** Complete and ready to set-up JavaScript testing solution. Works out of the box for any React project.

<a name="inst"></a>
## Installation
clone the github repository.

```
git clone https://github.com/jua15377/web_proyecto_1_react_boilerplate.git
```
Go to the project folder Install the packages with npm.

```
npm install
```

<a name="usage"></a>
## Usage
Go to src/ here you foun the base of the example app index.js contaisn code style.css have som css styles and finally there are some files for the test scripts.

Start the development server and opens the browser
```
npm run star
```
Now the app will be running. At [localhost:8080](https://localhost:8080)

Prepare the app to be publish
```
npm run build
```
This generates the /dist folder with all the code.


<a name="test"></a>
## Tests

This boilerplate comes with a built-in Jest test-runner to start testing your scripts.  The example app comes with a few test for you as an example
```
npm run test
```
this will display the result of the test. You can read the jest documentations for more details about tests.
<a name="lint"></a>
## Linting

To run the built-in ESLint linter on your app, run the command, this will show you the errors of style in your code. You can modify this behavior on  eslitrc.js:

```
npm run lint
```
ESLint can help you to solve as many fixes as it can, run the command:

```
npm run lint-fix
```

Any of the previos scripts can be found and customizate on package.json
<a name="autor"></a>
## Author
[Jonnatha Juarez (15377)](jua15377@uvg.edu.gt)
