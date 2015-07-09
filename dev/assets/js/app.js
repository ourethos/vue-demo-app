// require singletons
var Vue = require('vue');
var Router = require('director').Router;
var Routes = require('./routes.js');

// create our router and main vue
var app = new Vue(require('./components/application.js'));
var router = new Router().configure();

// regiester our routes
var routes = new Routes(app, router);

// Set debug to true or false if needed.
//Vue.config.debug = true;