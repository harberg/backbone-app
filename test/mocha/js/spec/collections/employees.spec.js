/**
 * A simple "hello world" test file (with no app dependencies yet).
 */
define(["app/collections/employees"], function(EmployeesCollection) {

    describe("app/collections/employees", function() {

        it("is defined", function() {
            var employeesCollection = new EmployeesCollection();
            expect(employeesCollection).to.be.a('object');
        });

    });

});