const chai = require("chai");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler();

const validUnits = ["gal", "l", "lbs", "kg", "mi", "km"];

suite("Unit Tests", function () {
  suite("Function convertHandler.getNum(input)", function () {
    test("whole number input", function (done) {
      var input = "32L";
      assert.equal(convertHandler.getNum(input), 32);
      done();
    });
    test("decimal number input", function (done) {
      var input = "3.2L";
      assert.equal(convertHandler.getNum(input), 3.2);
      done();
    });
    test("fractional number input", function (done) {
      var input = "1/2L";
      assert.equal(convertHandler.getNum(input), 0.5);
      done();
    });
    test("fractional number input w/ decimal", function (done) {
      var input = "3.6/2L";
      assert.equal(convertHandler.getNum(input), 1.8);
      done();
    });
    test("double-fractional number input", function (done) {
      var input = "3/6/2L";
      assert.equal(convertHandler.getNum(input), "invalid number");
      done();
    });
    test("no numerical input", function (done) {
      var input = "L";
      assert.equal(convertHandler.getNum(input), 1);
      done();
    });
  });
  suite("Function convertHandler.getUnit(input)", function () {
    test("for each valid unit inputs", function (done) {
      var input = "4gal";
      assert.equal(convertHandler.getUnit(input), "gal");
      done();
    });
    test("invalid input unit", function (done) {
      var input = "4gl";
      assert.equal(convertHandler.getUnit(input), "invalid unit");
      done();
    });
    test("return unit", function (done) {
      var input = "gal";
      assert.equal(convertHandler.getReturnUnit(input), "L");
      done();
    });
    test("spell-out string", function (done) {
      var input = "l";
      assert.equal(convertHandler.spellOutUnit(input), "liters");
      done();
    });
    test("gal to L", function (done) {
      var input = "gal";
      assert.equal(convertHandler.getReturnUnit(input), "L");
      done();
    });
    test("L to gal", function (done) {
      var input = "L";
      assert.equal(convertHandler.getReturnUnit(input), "gal");
      done();
    });
    test("mi to km", function (done) {
      var input = "mi";
      assert.equal(convertHandler.getReturnUnit(input), "km");
      done();
    });
    test("km to mi", function (done) {
      var input = "km";
      assert.equal(convertHandler.getReturnUnit(input), "mi");
      done();
    });
    test("lbs to kg", function (done) {
      var input = "lbs";
      assert.equal(convertHandler.getReturnUnit(input), "kg");
      done();
    });
    test("kg to lbs", function (done) {
      var input = "kg";
      assert.equal(convertHandler.getReturnUnit(input), "lbs");
      done();
    });
  });
});
