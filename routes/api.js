"use strict";

const expect = require("chai").expect;
const ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function (app) {
  let convertHandler = new ConvertHandler();
  app.route("/api/convert").get((req, res) => {
    const units = ["gal", "l", "lbs", "kg", "mi", "km"];
    var input = req.query.input;
    var initNum = convertHandler.getNum(input);
    var initUnit = convertHandler.getUnit(input);
    if (units.includes(initUnit.toLowerCase())) {
      console.log(initUnit);
      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);

      var toString = convertHandler.getString(
        initNum,
        convertHandler.spellOutUnit(initUnit),
        returnNum,
        convertHandler.spellOutUnit(returnUnit)
      );

      res.json({
        initNum,
        initUnit,
        returnNum,
        returnUnit,
        string: toString,
      });
    } else {
      res.send("invalid unit");
    }
  });
};
