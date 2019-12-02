"# qg_backend" 

# Initial npm
npm init -y

# Setting up the Project

npm install webpack webpack-cli --save-dev

# Setting up React

npm install react react-dom --save

# Def

npm install @babel/core @babel/preset-env @babel/preset-react babel-loader --save-dev

#Def 
create: webpack.config.js

@babel/core: Transform ES6 code into ES5 JavaScript code.
@babel/preset-env: It allows you to use the latest modern JavaScript.
@babel/preset-react: Babel preset turns JSX code into functions.
babel-loader: This package allows transpiling JavaScript files using Babel and Webpack.
babel-polyfill: arrow function ES6 -> ES5

#loader 
npm install style-loader css-loader --save-dev

#plugin
npm install mini-css-extract-plugin --save-dev
npm install clean-webpack-plugin --save-dev
npm install html-webpack-plugin --save-dev
npm install webpack-md5-hash --save-dev


#dev env
npm install webpack-dev-server --save-dev

