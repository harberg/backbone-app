// SKELETON
/**
 * Application.
 *
 * This file is usually the "binding" of all of the individual Backbone.js
 * components into a unified whole. It is also typically *not* unit tested
 * because it has side effects from just running it. So, here is the expected
 * place to also do things like start Backbone.js History, do `$()` DOM
 * manipulation, etc.
 */
define([
  "jquery",
  "backbone",
  // "app/models/employee",
  // "app/collections/employees",
  // "app/views/employees",
  // "app/views/employee",
  // "app/views/employeeSingle",
  "app/routes/routes",

  // Import and compile a HBS template.
  // For real application, remove this import (and the real file) and replace
  // with imports for your Backbone components needed to bootstrap the full
  // application. Likely this means a collection and router.


  "hbs!app/templates/employeeSingle",

  // Polyfill JSON for old browsers.
  "json2"
], function (
  $,
  Backbone,

  // Custom JS
  // EmployeeModel,
  // EmployeesCollection,
  // EmployeesView,
  // EmployeeView,
  // EmployeeSingleView,
  EmployeeRouter

) {
  "use strict";



  // Backbone.history.start({silent: true});
  // var router = new EmployeeRouter();
  // router.loadUrl();

  // --------------------------------------------------------------------------
  // Backbone.js Components.
  // --------------------------------------------------------------------------
  // Let's write a very simple Backbone model, and bind that with a template
  // to a view.

  // Backbone.js Model
  //
  // The model contains the data. Typically this is sync'ed with remote or
  // local storage.

  //Backbone.js View

  // --------------------------------------------------------------------------
  // Adjustments **just** for this demo page.
  // --------------------------------------------------------------------------
  // Hide the existing Notes HTML content for our skeleton application.
  // This hide can be removed later, once you are using the HTML content
  // in `index.html`.
  $(".notes-html").hide();

  // Dynamically add our element for the Backbone.js view
  // (Usually done in actual HTML).
  $("<div class='hello' />").appendTo($("body"));

  // --------------------------------------------------------------------------
  // Application Bootstrap
  // --------------------------------------------------------------------------
  // Actually wire up and kick everything off!
  //
  // **Note**: The `app.js` file is usually just comprised of **imports**
  // of the individual Backbone.js components above and the below function
  // on page load.
  $(function () {

    var router = new EmployeeRouter();
    router.start();
    //router.navigate("index",{ trigger : true});

    // ""
    // employees: function () {}

    // "employee/:id"
    // employee: function (id) {}

    // var renderHtml = employeeTmpl(nick.toJSON());
    // $("body").append($(renderHtml));
    // window.console.log("Template", renderHtml);
  });
});
























