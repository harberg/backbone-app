define(["backbone", "hbs!app/templates/employee"], function(Backbone, employeeTmpl) {
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

  return EmployeeView;
});