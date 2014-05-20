define(["backbone", "hbs!app/templates/employeeSingle"], function(Backbone, employeeSingleTmpl) {
  var EmployeeSingleView = Backbone.View.extend({
    el: ".hello",
    template: employeeSingleTmpl,
    initialize: function () {
        this.listenTo(this.model, "change", this.render);
        this.render();
    },
    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
  });

  return EmployeeSingleView;
});