# React boilerplate
Boilerplate for React, Redux and Immutable.
It uses Stylus for easy writing of css.

The project is built with webpack.

## Installation
Do a "npm install" in the application directory, this will install all dependencies from package.json

###Install Linter
The linter will enforce our coding standards for react projects and are defined in .eslintrc.js

1. npm install -g eslint eslint-plugin-react
2. Install Sublime Linter 3
3. Install Sublime Linter contrib eslint

###Install Babel package for sublime
This sublime package enables correct syntax highlighting for jsx and es6

1. Install sublime package babel
2. Open a .jsx file and go to menu: View -> Syntax -> Open all current extensions as -> Babel -> Javacsript (Babel).
3. Do the same thing for .js files

###Install editorconfig
The configuration forces 2 space indentation and correct line feeds end EOL mark.

1. Install sublime package editorconfig

##Application
"npm start" will launch the dev server running at port 8080 by default.


##TODO
1. Add testing framework
2. Add constants for actions
3. Make a better example app
