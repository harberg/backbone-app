/**
 * A simple "hello world" test file (with no app dependencies yet).
 */
define(["app/models/employee"], function(EmployeeModel) {

    describe("app/models/employee", function() {
        it("should have defaults", function() {
            var employee = new EmployeeModel();
            expect(employee.get("position"))
                .to.equal("Customer Service");
        });

        it("should stub get", function() {
            var stub = sinon.stub(EmployeeModel.prototype, "get", function() {
                return "Frodo";
            });
            var employee = new EmployeeModel();

            expect(employee.get("position")).to.equal("Frodo");
            stub.restore();
        });
    });

});