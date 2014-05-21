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
    return EmployeeView;
});