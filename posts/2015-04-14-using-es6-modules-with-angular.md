---
title: "Using ES6 modules with angular"
date: "2015-04-14"
tags: ["angular", "javascript"]
excerpt: "The es6 modules(es6m) spec is now finalized, so I think it is a great time to start using it in our frontend apps. My first experience with es6m was with ember-cli..."
description: "This articles explains on how to use es6 modules with AngularJS."
---

## Using ES6 modules with angular

The es6 modules(es6m) spec is now finalized, so I think it is a great time to start using it in our frontend apps. My first experience with es6m was with [ember-cli](http://www.ember-cli.com/). It felt a lot more better than using AMD which was the only module format I've used in the frontend.

I wanted to see if I could get es6m to work with one of my own projects named [ngAppKit(nAK)](https://github.com/blessenm/ng-app-kit/). nAK is basically modified version of the [angular-seed](https://github.com/angular/angular-seed) project with some grunt tasks to speed up my work flow. Grunt handles sass compilation, concatention, auto injection of scripts, linting and creation of a distribution build).

Some of the blog posts out there use [Google's Traceur compiler](https://github.com/google/traceur-compiler). I wanted to take a different approach where I use [Babel](https://babeljs.io/) to compile es6m into cjs and use [Browserify](http://browserify.org/) to bundle the transpiled code to use in the browser. To get the final result, I first got nAK to work with cjs/browserify. The next step was to write es6m and check whether the cjs ouput from Babel was similar to the cjs code I wrote earlier. Eventually I got it all working. If you prefer to just see the project, you can view it [here](https://github.com/blessenm/ng-app-kit/).

nAK comprises of basically 7 files.

- app.js - Entry point of the app.
- router.js - Specifies all the routes of the app.
- controllers/home/car.js, controllers/home/fruit.js - Angular controllers.
- filters/interpolate.js - Angular filters.
- services/version.js - Angular services.
- directives/app-version.js - Angular directives

Compiling es6m to cjs provides us the benefit of being able to use other modules in npm via browserify. For nAK, I installed [angular](https://www.npmjs.com/package/angular) and [angular-ui-router](https://www.npmjs.com/package/angular-ui-router) via npm. Below is the code for `app.js`

```javascript
import angular from "angular";
import "angular-ui-router";
import "./config-generated";

import routerConfig from "./router.js";

import filters from "./filters";
import services from "./services";
import directives from "./directives";
import controllers from "./controllers";

angular.module("nakApp", [
  "ui.router",
  "config",
  "nakApp.controllers",
  "nakApp.filters",
  "nakApp.services",
  "nakApp.directives",
]);

angular.module("nakApp").config(routerConfig);

controllers();
filters();
services();
directives();
```

As you can see, we import all the frontend libs and do a single import for controllers, services, filters and directives.

```javascript
import controllers from "./controllers";
```

transpiles to something like

```javascript
var controllers = require("./controllers");
```

When browserify see's this, it will look for `./controllers/index.js`. This file is where we will import all the controllers we have and register them with angular. Whenever we create a new controller, we must import and register it inside the index.js file.

Here is the `controllers/index.js` file.

```javascript
import angular from "angular";
import CarController from "./home/cars";
import FruitController from "./home/fruits";

export default function () {
  "use strict";

  var app = angular.module("nakApp");

  app.controller("HomeCarsController", CarController);
  app.controller("HomeFruitsController", FruitController);
}
```

Here is the `controllers/home/cars.js` file.

```javascript
export default [
  "$scope",
  "ENV",
  function ($scope, ENV) {
    "use strict";

    console.info(ENV);
    $scope.items = ["Mercedes", "BMW", "Audi"];
  },
];
```

**The same idea is the used with filters, directives and services.**

You can now use browserify to generate a bundle.js file to include in your html file. The following is the command to install browserify and babelify and generate the bundle.js file.

```bash
npm install -g browserify
npm install babelify
browserify -d -e app.js -o bundle.js -t [ babelify --modules common]`
```

<h3><a id="ngimporter" href="https://github.com/blessenm/grunt-ng-importer">grunt-ng-importer</a></h3>
This setup worked but I found adding entries into the index.js file when creating new controllers or directives felt a bit repetitve like adding scripts tags everytime you create a new js file. When I needed to inject new script tag to html I would use [grunt-injector](https://github.com/klei/grunt-injector), so my idea was to write a grunt plugin to generate the index.js file for controllers,directives,filters and services. There where 2 problems that I encountered when writing this plugin.

1.  Getting the import path.
2.  Getting the name use to register the module with angular.

Here is the configuration object for ngimporter

```javascript
module.exports = {
  dev: {
    importData: [
      {
        src: ["app/controllers/**/*.js"],
        dest: "app/controllers/index.js",
        base: "app/controllers/",
        type: "controller",
      },
      {
        src: ["app/directives/**/*.js"],
        dest: "app/directives/index.js",
        base: "app/directives/",
        type: "directive",
      },
      {
        src: ["app/services/**/*.js"],
        dest: "app/services/index.js",
        base: "app/services/",
        type: "service",
      },
      {
        src: ["app/filters/**/*.js"],
        dest: "app/filters/index.js",
        base: "app/filters/",
        type: "filter",
      },
    ],
  },
};
```

1.  To solve the first problem, I removed the `base` string from the actual location string of the file. Here's how the `cars.js` location string will look inside ngimporter

        `app/controllers/home/cars.js`

        For the generated `app/controllers/index.js` to correctly import `cars.js`, the import path should look like `./controllers/cars.js`.

    We get this import path by replacing the `base` specified in the config with './' on the file location.

        This solution is very specific to nAK and doesn't look elegant but it works. I consider this a work in progress and will probably try to improve it to work with other folder structures.

        ngimporter creates an import name for a module by basically processing the file location. It removes the base, capitalizes every word between slashes, removes the .js extension and adds the capitalized type(config value) of the module.
        The import name for `app/controllers/home/cars.js` will look like `HomeCarsController`.

        This is how the final import statement will look like `import HomeCarsController from './controllers/cars.js';`

2.  The second problem is what name will be used to register the module with angular.
    `app.controller(??????, HomeCarsController);`

    Every developer will want to specify that name. My solution was to get the cars controller to export a name function and the function name could be used as the registration name.

    If you look at the code of `cars.js` above you can see that I exported an array instead of a function. So the first step is make sure every controller/filter... module exports a named function. The new `cars.js` will look like

```javascript
export default function HomeCarsController() {
  return [
    "$scope",
    "ENV",
    function ($scope, ENV) {
      $scope.items = ["Mercedes", "BMW", "Audi"];
      $scope.env = ENV;
    },
  ];
}
```

Now inside the `index.js` file, instead of just passing the imported module to angular, we will pass whatever the imported module function returns and the module functions name will be used as the registration name. Here is the updated index.js file

```javascript
import angular from "angular";
import HomeCarsController from "./home/cars.js";
import HomeFruitsController from "./home/fruits.js";

export default function () {
  var app = angular.module("nakApp.controllers", []);
  app.controller(HomeCarsController.name, HomeCarsController());
  app.controller(HomeFruitsController.name, HomeFruitsController());
}
```

[Here is a link to grunt-ng-importer](https://github.com/blessenm/grunt-ng-importer). Thats it. I consider this a first pass at handling es6m with angular and may need improvements but its a start. For compilation I use [grunt-browserify](https://github.com/jmreidy/grunt-browserify) with the [babelify](https://github.com/babel/babelify) transform. You can see the configuration for the browserify task over [here](https://github.com/blessenm/ng-app-kit/blob/master/grunt/tasks/browserify.js). **[Here is the link to ngAppKit](https://github.com/blessenm/ng-app-kit).**. Your comments are welcome.

Here are some links that helped a lot for getting this all setup.

1.  [Browserify Your AngularJS App](https://blog.codecentric.de/en/2014/08/angularjs-browserify/)
2.  [ECMAScript 6 modules: the final syntax
    ](http://www.2ality.com/2014/09/es6-modules-final.html)