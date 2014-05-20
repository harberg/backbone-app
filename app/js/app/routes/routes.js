define([
    "backbone",
    "../collections/employees",
    "../models/employee",
    "../views/employees",
    "../views/employeeSingle"
    ], function(
        Backbone,
        EmployeesCollection,
        EmployeeModel,
        EmployeesView,
        EmployeeSingleView
    ) {
    var EmployeeRouter = Backbone.Router.extend({
        routes: {
            "" : "index",
            //"employees": "index",
            "employees/:id": "show",
            //"/testme": "testme"
        },

        start: function() {
            Backbone.history.start();
        },
        initialize: function() {
            this.employeesCollection = new EmployeesCollection([
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

        },
        index: function() {
            this.nickView = new EmployeesView({
                collection: this.employeesCollection
              });
            console.dir(this.employeesCollection);
        },

        show: function(id) {
            this.employeeSingleView = new EmployeeSingleView({
              model: this.employeesCollection.get(id)
            });
        }
    });

    return EmployeeRouter;
});