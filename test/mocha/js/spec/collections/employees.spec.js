/**
 * A simple "hello world" test file (with no app dependencies yet).
 */
define(["app/collections/employees"], function(EmployeesCollection) {

    describe("app/collections/employees", function() {
        var employeesCollection = new EmployeesCollection();

        it("is defined", function() {
            expect(employeesCollection.length().to.equal(4));
        });

    });

});