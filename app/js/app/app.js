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

  // Import and compile a HBS template.
  // For real application, remove this import (and the real file) and replace
  // with imports for your Backbone components needed to bootstrap the full
  // application. Likely this means a collection and router.
  "hbs!app/templates/employee",
  "hbs!app/templates/employees",
  "hbs!app/templates/employeeSingle",

  // Polyfill JSON for old browsers.
  "json2"
], function (
  $,
  Backbone,
  employeeTmpl,
  employeesTmpl,
  employeeSingleTmpl
) {
  "use strict";

  // --------------------------------------------------------------------------
  // Backbone.js Components.
  // --------------------------------------------------------------------------
  // Let's write a very simple Backbone model, and bind that with a template
  // to a view.

  // Backbone.js Model
  //
  // The model contains the data. Typically this is sync'ed with remote or
  // local storage.
  var EmployeeModel = Backbone.Model.extend({
    defaults: {
        id: "",
        firstName: "",
        lastName: "",
        position: ""
    }

  });

  var EmployeesCollection = Backbone.Collection.extend({
    model: EmployeeModel
  });

  //Backbone.js View
  var EmployeeView = Backbone.View.extend({
    // NO! el: ".hello",
    // Have to manually bind in parent view (.insert())
    // Template needs to switch to a LI tag

    template: employeeTmpl,
    events: {
        "click": "buttonClickHandler"
    },
    initialize: function () {
        this.listenTo(this.model, "change", this.render);
      },
    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
      },

    buttonClickHandler : function () {
        this.$el.css("background-color", "yellow");
    }
  });

  var EmployeeSingleView = Backbone.View.extend({
    el: ".hello",
    template: employeeSingleTmpl,
    initialize: function () {
        this.listenTo(this.model, "change", this.render);
    },
    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
  });

  var EmployeesView = Backbone.View.extend({
    el: ".hello",
    template: employeesTmpl,
    initialize: function () {
        this.listenTo(this.collection, "change", this.render);
      },
    render: function () {
        this.$el.html(this.template());

        var $list = this.$("#employees");
        this.collection.each(function (model) {
            // Create a child view with model. var employeeView = new
            // Render the view.
            // Attach the child view to the parent `$list`
            var employeeView = new EmployeeView({
                model: model,

                render: function () {
                    this.$el.html(this.template(this.model.toJSON()));
                    return this;
                  },

              });

            employeeView.render();
            $list.append(employeeView.$el);

          });

        return this;
      }
  });

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
    var employeesCollection = new EmployeesCollection([
      new EmployeeModel({
        id: 1,
        firstName: "Nick",
        lastName: "Harberg",
        position: "Student"
      }),
      new EmployeeModel({
        id: 2,
        firstName: "Bilbo",
        lastName: "Baggins",
        position: "Cook"
      }),
      new EmployeeModel({
        id: 3,
        firstName: "Samwise",
        lastName: "Gamgee",
        position: "Gardner"
      }),
      new EmployeeModel({
        id: 4,
        firstName: "Frodo",
        lastName: "Baggins",
        position: "Ring Bearer"
      })
    ]);

    var nickView = new EmployeesView({
        collection: employeesCollection
      });

    // ""
    // employees: function () {}

    // "employee/:id"
    // employee: function (id) {}
    var modelId = parseInt("3", 10);
    var employeeSingleView = new EmployeeSingleView({
      model: employeesCollection.findWhere({"id": modelId})
    });

    //nickView.render();
    employeeSingleView.render();

    // var renderHtml = employeeTmpl(nick.toJSON());
    // $("body").append($(renderHtml));
    // window.console.log("Template", renderHtml);
  });
});
























