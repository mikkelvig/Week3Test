/**
 * Created by Mikkel on 02-03-2016.
 */

var expect = require("chai").expect;
var adder = require("../module");

describe("Test calculator", function () {

    it("should return 10 asynchronously", function (done) {
        adder.addAsync(5, 5, function (res) {
            expect(res).to.be.equal(10);
            done();
        })
    })

    it("should return 4, using add()", function () {
        expect(adder.add(2, 2)).to.be.equal(4);
    })

    it("should return 5, using subtract()", function () {
        expect(adder.subtract(10, 5)).to.be.equal(5);
    })

    it("should throw a ReferenceError", function () {
        var errorz = new ReferenceError('This is a bad function.');
        var fn = function () {
            throw errorz;
        }
        expect(fn).to.throw(ReferenceError);
    })

    it("should throw my own error", function () {
        expect(function(){
            adder.divide(5,0);
        }).to.throw(Error, "Attempt to divide by zero");
    })


    //  expect(adder.divide(5, 0)).to.throw("Attempt to divide by zero");

})





