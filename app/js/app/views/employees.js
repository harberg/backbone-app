define([
        "backbone",
        "hbs!app/templates/employees",
        "../views/employee"
    ], function(
        Backbone,
        employeesTmpl,
        EmployeeView
    ) {
    var EmployeesView = Backbone.View.extend({
        el: ".hello",
        template: employeesTmpl,
        initialize: function () {
            this.listenTo(this.collection, "change", this.render);
            this.render();
        },
        render: function () {
            this.$el.html(this.template());
            var $list = this.$("#employees");
            this.collection.each(function (model) {
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
    return EmployeesView;
});