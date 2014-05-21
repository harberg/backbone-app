define(["backbone"], function(Backbone) {
    var EmployeeModel = Backbone.Model.extend({
        defaults: {
            id: "",
            firstName: "",
            lastName: "",
            position: "Customer Service"
        }
    });
    return EmployeeModel;
});

