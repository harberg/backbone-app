define([
        "backbone",
        "hbs!app/templates/employee"
    ], function(
        Backbone,
        employeeTmpl
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
        buttonClickHandler : function (id) {
            //this.$el.css("background-color", "yellow");
            this.employeeSingleView = new EmployeeSingleView({
                model: this.employeesCollection.get(id)
            });
        }
    });
    return EmployeeView;
});