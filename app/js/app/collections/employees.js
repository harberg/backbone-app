define([
        "backbone",
        "app/models/employee"
    ], function(
        Backbone,
        EmployeeModel
    ){
    var EmployeesCollection = Backbone.Collection.extend({
        model: EmployeeModel
    });
    return EmployeesCollection;
});