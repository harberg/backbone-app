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
    var DATA = [{
            "id": 1,
            "firstName": "Nick",
            "lastName": "Harberg",
            "position": "Student"
        },
        {
            "id": 2,
            "firstName": "Bilbo",
            "lastName": "Baggins",
            "position": "Cook"
        },
        {
            "id": 3,
            "firstName": "Samwise",
            "lastName": "Gamgee",
            "position": "Gardner"
        },
        {
            "id": 4,
            "firstName": "Frodo",
            "lastName": "Baggins",
            "position": "Ring Bearer"
        }];
    var EmployeeRouter = Backbone.Router.extend({
        routes: {
            "" : "index",
            "employees/:id": "show",
        },
        start: function() {
            Backbone.history.start();
        },
        initialize: function() {
            this.collection = new Backbone.Collection;
            this.collection.reset(DATA);

            this.nickView = new EmployeesView({
                collection: this.collection
            });
        },
        index: function() {

        },
        show: function(id) {
            console.log(id);
            this.employeeSingleView = new EmployeeSingleView({
                model: this.collection.get(id)
            });
        }
    });
    return EmployeeRouter;
});