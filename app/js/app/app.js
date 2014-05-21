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
    "app/routes/routes",

    "hbs!app/templates/employeeSingle",

  // Polyfill JSON for old browsers.
    "json2"
], function (
    $,
    Backbone,
    EmployeeRouter
) {
    "use strict";
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
    });
});
























