define([
        "backbone",
        "hbs!app/templates/employee",
        "../views/employeeSingle",
        "../collections/employees"
    ], function(
        Backbone,
        employeeTmpl,
        EmployeeSingleView,
        EmployeesCollection
    ) {
    var EmployeeView = Backbone.View.extend({
        template: employeeTmpl,
        events: {
            "click .btn": "buttonClickHandler"
        },
        initialize: function () {
            this.listenTo(this.model, "change", this.render);
        },
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },
        buttonClickHandler : function () {
            //this.$el.css("background-color", "yellow");

            this.employeeSingleView = new EmployeeSingleView({
                model: this.model
            });
        }
    });
    return EmployeeView;
});